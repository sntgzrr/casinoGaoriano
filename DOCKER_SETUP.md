# 🐳 Docker Setup - Casino Gaoriano

Guía completa para ejecutar el proyecto con Docker y Docker Compose.

## Requisitos Previos

- Docker (v20.10+)
- Docker Compose (v2.0+)
- Git

## Estructura del Proyecto

```
.
├── back/              # Backend Django + API REST
├── front/             # Frontend React + Vite
├── docker-compose.yml # Configuración de servicios
└── .github/workflows/ # CI/CD Pipeline
```

## Ejecución Local

### 1. Configurar Variables de Entorno

#### Backend (`back/.env`)

```bash
cat > back/.env << 'EOF'
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
CORS_ALLOW_CREDENTIALS=True

# Database Configuration (PostgreSQL)
DATABASE_URL=postgresql://casino_user:casino_pass@db:5432/casino_db
DB_HOST=db
DB_PORT=5432
POSTGRES_DB=casino_db
POSTGRES_USER=casino_user
POSTGRES_PASSWORD=casino_pass
EOF
```

#### Frontend (`front/.env.production`)

```bash
cat > front/.env.production << 'EOF'
VITE_API_URL=http://localhost:8000
EOF
```

### 2. Construir y Ejecutar los Servicios

```bash
# Construir todas las imágenes
docker compose build

# Iniciar los servicios en background
docker compose up -d

# Verificar estado de los servicios
docker compose ps

# Ver logs en tiempo real
docker compose logs -f
```

### 3. Verificar que Todo Esté Funcionando

```bash
# Backend (Django API)
curl http://localhost:8000/api/

# Frontend (React)
open http://localhost:3000

# PostgreSQL (verificar conectividad)
docker compose exec db psql -U casino_user -d casino_db -c "\dt"
```

## Servicios Disponibles

| Servicio | URL | Usuario | Contraseña |
|----------|-----|---------|-----------|
| Backend | `http://localhost:8000` | - | - |
| Frontend | `http://localhost:3000` | - | - |
| PostgreSQL | `localhost:5432` | `casino_user` | `casino_pass` |

## Comandos Útiles

```bash
# Ver logs de un servicio específico
docker compose logs back
docker compose logs front
docker compose logs db

# Ejecutar comandos Django
docker compose exec back python manage.py createsuperuser
docker compose exec back python manage.py migrate

# Detener servicios
docker compose down

# Detener y eliminar volúmenes (resetear BD)
docker compose down -v

# Reconstruir una imagen específica
docker compose build back
docker compose build front
```

## Estructura del Docker Compose

### `db` (PostgreSQL 15)
- Imagen: `postgres:15`
- Puerto: `5432`
- Variables de entorno: Lee desde `back/.env`
- Healthcheck: Verifica conectividad PostgreSQL
- Volumen: `postgres_data` (persistencia)

### `back` (Django + Gunicorn)
- Dockerfile: `./back/Dockerfile`
- Puerto: `8000`
- Dependencia: Espera a que `db` esté healthy
- Entrypoint: `entrypoint.sh` (migraciones, cron, gunicorn)
- Variables: Lee desde `back/.env`

### `front` (React + Nginx)
- Dockerfile: `./front/Dockerfile`
- Puerto: `3000`
- Nginx proxy: Sirve archivos estáticos
- Dependencia: Espera a `back`
- Ambiente: Lee desde `front/.env.production`

## Troubleshooting

### Backend no inicia
```bash
# Ver logs detallados
docker compose logs back

# Verificar variables de entorno
docker compose exec back env | grep DB_

# Verificar conectividad a PostgreSQL
docker compose exec back python -c "import psycopg2; conn = psycopg2.connect(host='db', port=5432, user='casino_user', password='casino_pass', dbname='casino_db'); print('Conexión exitosa')"
```

### PostgreSQL no está listo
```bash
# Esperar manualmente
docker compose exec db pg_isready -U casino_user -d casino_db

# Ver logs de PostgreSQL
docker compose logs db
```

### Puerto en uso
```bash
# Cambiar puertos en docker-compose.yml o usar:
docker compose up -d -p custom_prefix

# O encontrar qué está usando el puerto:
sudo lsof -i :8000
sudo lsof -i :3000
sudo lsof -i :5432
```

## Pipeline CI/CD (GitHub Actions)

El archivo `.github/workflows/build-docker.yml` ejecuta automáticamente:

1. ✅ Verifica Docker y Docker Compose
2. ✅ Crea archivos `.env` con valores de prueba
3. ✅ Construye las imágenes
4. ✅ Inicia los servicios
5. ✅ Verifica que estén healthy
6. ✅ Ejecuta tests básicos
7. ✅ Limpia recursos

**Cuándo se ejecuta:**
- En cada `push` a `main`
- En cada `pull request` a `main`

## Desarrollo vs Producción

### Desarrollo (con Django dev server)
```bash
cd back
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .\.venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py runserver
```

### Producción (con Docker + Gunicorn)
```bash
# Establecer DEBUG=False en back/.env
docker compose build
docker compose up -d
```

## Seguridad en Producción

Antes de deployar:

- ✅ Cambiar `SECRET_KEY` en `back/.env`
- ✅ Usar variables de entorno de tu proveedor cloud
- ✅ Configurar `ALLOWED_HOSTS` correctamente
- ✅ Usar HTTPS con certificados válidos
- ✅ Revisar `CORS_ALLOWED_ORIGINS`
- ✅ Cambiar contraseña de PostgreSQL

## Recursos Adicionales

- [Docker Docs](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [Django Deployment](https://docs.djangoproject.com/en/6.0/howto/deployment/)
- [Gunicorn](https://gunicorn.org/)

---

**Última actualización:** Abril 2, 2026
