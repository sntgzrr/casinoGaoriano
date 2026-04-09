"""
Development Settings
Override base settings with development-specific configurations
"""

from .base import *

# ============================================================================
# DEBUG & SECURITY (RELAXED FOR DEVELOPMENT)
# ============================================================================

DEBUG = True
ALLOWED_HOSTS = ['*']

# Allow insecure development tools
INTERNAL_IPS = ['127.0.0.1', 'localhost']


# ============================================================================
# DATABASE: SQLite for local development
# ============================================================================

DATABASES = {
    'default': env.db(
        default='sqlite:///db.sqlite3',
    )
}

# Disable connection pooling in development for simpler debugging
DATABASES['default']['DISABLE_SERVER_SIDE_CURSORS'] = True


# ============================================================================
# SECURITY: RELAXED IN DEVELOPMENT
# ============================================================================

SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False


# ============================================================================
# API & CORS: PERMISSIVE IN DEVELOPMENT
# ============================================================================

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://localhost:5173'
]

CORS_ALLOW_CREDENTIALS = True


# ============================================================================
# INSTALLED APPS: Add debug toolbar
# ============================================================================

# INSTALLED_APPS += [
#     'django_extensions',  # Uncomment if needed for development tools
# ]


# ============================================================================
# MIDDLEWARE: Add debugging middleware
# ============================================================================

MIDDLEWARE += [
    # Add development middleware if needed
]
