#!/bin/bash
# Entry point script for Django application

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
python << 'PY'
import psycopg2
import time
import os
import sys

host = os.getenv('DB_HOST')
port = os.getenv('DB_PORT')
user = os.getenv('POSTGRES_USER')
password = os.getenv('POSTGRES_PASSWORD')
dbname = os.getenv('POSTGRES_DB')

missing = [k for k,v in [('DB_HOST', host), ('DB_PORT', port), ('POSTGRES_USER', user), ('POSTGRES_PASSWORD', password), ('POSTGRES_DB', dbname)] if not v]
if missing:
    sys.exit('Missing environment variables: ' + ', '.join(missing))

try:
    port = int(port)
except ValueError:
    sys.exit('DB_PORT must be an integer (e.g. 5432).')

for i in range(1, 61):
    try:
        conn = psycopg2.connect(host=host, port=port, user=user, password=password, dbname=dbname)
        conn.close()
        print('PostgreSQL is ready!')
        break
    except psycopg2.OperationalError as exc:
        print(f'PostgreSQL not ready ({i}/60): {exc}')
        time.sleep(2)
else:
    sys.exit('PostgreSQL did not become ready in time.')
PY

# Apply migrations and collect static
echo "Running migrations..."
python manage.py migrate --noinput

# echo "Collecting static files..."
# python manage.py collectstatic --noinput

echo "Starting Django application..."
exec "$@"