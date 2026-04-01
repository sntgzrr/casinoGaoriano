#!/bin/bash
# Entry point script for Django application

# Run migrations
echo "Running migrations..."
python manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Starting Django application..."
# Start server
exec "$@"