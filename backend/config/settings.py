import os
import dj_database_url
from pathlib import Path
from datetime import timedelta
from dotenv import load_dotenv
from corsheaders.defaults import default_headers

# =========================================================
# BASE DIRECTORY
# =========================================================

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / '.env')

# =========================================================
# ENV VARIABLES
# =========================================================


SECRET_KEY = os.getenv(
    'SECRET_KEY',
    'django-insecure-your-secret-key-here'
)

DEBUG = os.getenv('DEBUG', 'True') == 'True'

# =========================================================
# YOUR WIFI IP
# =========================================================

LOCAL_IP = "10.1.40.205"

# =========================================================
# ALLOWED HOSTS
# =========================================================

ALLOWED_HOSTS = [
    '*',
    'localhost',
    '127.0.0.1',
    LOCAL_IP,
]

# =========================================================
# FRONTEND URL
# =========================================================

FRONTEND_URL = "http://localhost:5173"

# =========================================================
# INSTALLED APPS
# =========================================================

INSTALLED_APPS = [
    'daphne',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'whitenoise.runserver_nostatic',

    'rest_framework',
    'corsheaders',
    'channels',

    'kanban',
]

# =========================================================
# ASGI / CHANNELS
# =========================================================

ASGI_APPLICATION = 'config.asgi.application'

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels.layers.InMemoryChannelLayer',
    },
}

# =========================================================
# MIDDLEWARE
# =========================================================

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',

    'whitenoise.middleware.WhiteNoiseMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',

    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# =========================================================
# ROOT URLS
# =========================================================

ROOT_URLCONF = 'config.urls'

# =========================================================
# TEMPLATES
# =========================================================

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',

        'DIRS': [],

        'APP_DIRS': True,

        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',

                'django.template.context_processors.request',

                'django.contrib.auth.context_processors.auth',

                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# =========================================================
# WSGI
# =========================================================

WSGI_APPLICATION = 'config.wsgi.application'

# =========================================================
# DATABASE
# =========================================================

DATABASES = {
    'default': dj_database_url.config(
        default=f"sqlite:///{BASE_DIR / 'db.sqlite3'}",
        conn_max_age=600
    )
}

# =========================================================
# PASSWORD VALIDATORS
# =========================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME':
        'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },

    {
        'NAME':
        'django.contrib.auth.password_validation.MinimumLengthValidator',
    },

    {
        'NAME':
        'django.contrib.auth.password_validation.CommonPasswordValidator',
    },

    {
        'NAME':
        'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# =========================================================
# INTERNATIONALIZATION
# =========================================================

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# =========================================================
# STATIC FILES
# =========================================================

STATIC_URL = 'static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_STORAGE = (
    'whitenoise.storage.CompressedManifestStaticFilesStorage'
)

# =========================================================
# DEFAULT AUTO FIELD
# =========================================================

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# =========================================================
# DJANGO REST FRAMEWORK
# =========================================================

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),

    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
}

# =========================================================
# JWT SETTINGS
# =========================================================

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),

    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),

    'AUTH_HEADER_TYPES': ('Bearer',),
}

# =========================================================
# SECURITY
# =========================================================

SECURE_CROSS_ORIGIN_OPENER_POLICY = (
    'same-origin-allow-popups'
)

SECURE_PROXY_SSL_HEADER = (
    ('HTTP_X_FORWARDED_PROTO', 'https')
)

SECURE_SSL_REDIRECT = False
SECURE_CROSS_ORIGIN_OPENER_POLICY = 'same-origin-allow-popups'
SECURE_REFERRER_POLICY = 'no-referrer-when-downgrade'

# =========================================================
# CORS
# =========================================================

CORS_ALLOWED_HOSTS = [LOCAL_IP, "localhost", "127.0.0.1", "*"]

CORS_ALLOW_ALL_ORIGINS = True # Temporary for easy local network testing

CORS_ALLOWED_ORIGINS = [
    f"http://{LOCAL_IP}:5173",
    f"http://{LOCAL_IP}:8000",

    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = list(default_headers) + [
    'x-csrftoken',
]

# =========================================================
# CSRF
# =========================================================

CSRF_TRUSTED_ORIGINS = [
    f"http://{LOCAL_IP}:5173",
    f"http://{LOCAL_IP}:8000",

    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# =========================================================
# EMAIL SETTINGS
# =========================================================

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = 'smtp.gmail.com'

EMAIL_PORT = 587

EMAIL_USE_TLS = True

EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')

EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')

DEFAULT_FROM_EMAIL = (
    f"Productive Flow <{EMAIL_HOST_USER}>"
)