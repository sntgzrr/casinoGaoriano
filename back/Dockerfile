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

# Copiar el proyecto
COPY . .

# Dar permisos al entrypoint
RUN chmod +x entrypoint.sh

# Puerto (Django/Gunicorn)
EXPOSE 8000

# Comando por defecto (producción)
CMD ["./entrypoint.sh", "gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]