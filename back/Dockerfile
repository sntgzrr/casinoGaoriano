# Imagen base
FROM python:3.12-slim

# Evita archivos .pyc y mejora logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Directorio de trabajo
WORKDIR /app

# Copiar requirements primero (mejor cache)
COPY requirements.txt .

# Instalar dependencias
RUN pip install --upgrade pip && pip install -r requirements.txt

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y cron && rm -rf /var/lib/apt/lists/*

# Copiar el proyecto
COPY . .

# Dar permisos al entrypoint
RUN chmod +x entrypoint.sh

# Puerto (Django/Gunicorn)
EXPOSE 8000

# Comando por defecto (producción)
# Cambiar $PORT por 8000 si no se usa una variable de entorno
CMD ["./entrypoint.sh", "gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:$PORT"]