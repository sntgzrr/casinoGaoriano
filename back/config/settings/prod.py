"""
Production Settings
Override base settings with production-specific configurations
"""

from .base import *

# ============================================================================
# SECURITY: DISABLE DEBUG IN PRODUCTION
# ============================================================================

DEBUG = False

# Explicitly set allowed hosts (should be defined in .env)
ALLOWED_HOSTS = env.list(
    'ALLOWED_HOSTS',
    default=['localhost', '127.0.0.1'],
)

# ============================================================================
# DATABASE: PostgreSQL for prod development
# ============================================================================

DATABASES = {
    'default': env.db()
}

# ============================================================================
# SECURITY: HTTPS & COOKIE SETTINGS
# ============================================================================

SECURE_SSL_REDIRECT = env.bool('SECURE_SSL_REDIRECT', default=True)
SESSION_COOKIE_SECURE = env.bool('SESSION_COOKIE_SECURE', default=True)
CSRF_COOKIE_SECURE = env.bool('CSRF_COOKIE_SECURE', default=True)
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_SECURITY_POLICY = {
    'default-src': ("'self'",),
    'script-src': ("'self'", "'unsafe-inline'"),
    'style-src': ("'self'", "'unsafe-inline'"),
}


# ============================================================================
# SECURITY: HSTS (HTTP Strict Transport Security)
# ============================================================================

SECURE_HSTS_SECONDS = env.int('SECURE_HSTS_SECONDS', default=31536000)  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool('SECURE_HSTS_INCLUDE_SUBDOMAINS', default=True)
SECURE_HSTS_PRELOAD = env.bool('SECURE_HSTS_PRELOAD', default=True)


# ============================================================================
# SECURITY: PROXY & TRUSTED HEADERS
# ============================================================================

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
TRUSTED_PROXIES = env.list('TRUSTED_PROXIES', default=[])


# ============================================================================
# PASSWORD VALIDATION (stricter in production)
# ============================================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 12,  # Stricter than base (8)
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
