from .base import *

DEBUG = True

ALLOWED_HOSTS = ["*"]

# Base de datos local (opcional override)
DATABASES = {
    "default": env.db(default="sqlite:///db.sqlite3")
}
