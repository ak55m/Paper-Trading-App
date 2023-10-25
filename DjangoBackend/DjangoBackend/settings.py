import datetime

"""
Django settings for DjangoBackend project.

Generated by 'django-admin startproject' using Django 4.2.6.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-nraxf53u74v2c5!+#ripv6@a6vlk+9si87j4rwipg2k+0+r*&)"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost']


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    #THIS IS THE APPLICATION FOR THE REST API
    "rest_framework",

    #CROSS ORIGIN HEADERS PROTECTOR
    "corsheaders",

    #THIS IS THE APP THAT WE INSTALLED USING STARTAPP, which wil basically handle the apis relating to the baackend plus database
    "userAPI"
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",

    #the cross origin middleware
    'corsheaders.middleware.CorsMiddleware',

    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "DjangoBackend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "DjangoBackend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

AUTH_USER_MODEL = 'userAPI.UserProfile'



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# REST_FRAMEWORK = {
#     "DEFAULT_PERMISSION_CLASSES": (

#         "rest_framework.permissions.AllowAny",

#     ),
#     "DEFAULT_PERMISSION_CLASSES": (
#         "rest_framework_jwt.authentication.JSONWebTokenAuthentication",
#         "rest_framework_jwt.authentication.SessionAuthentication",
#         "rest_framework_jwt.authentication.BasicAuthentication",
#     ),
# }

#AUTHENTICATION FOR THE JWT ON REST FRAMEWORK
REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.AllowAny",
        # Other permission classes...
    ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication",
        # Other authentication classes...
    ),
}




# JWT_AUTH = {

#     #TO HANDLE HOW LONG THE JWT SECRET WOULD LAST FOR
#     "JWT_EXPIRATION_DELTA": datetime.timedelta(days=3),

#     #ALLOW REFRESH FOR THE JWT TOKENS
#     "JWT_ALLOW_REFRESH": True,

# }

# Configure JWT settings
SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": datetime.timedelta(minutes=60),  # Set the token lifetime as needed.
    "SLIDING_TOKEN_REFRESH_LIFETIME": datetime.timedelta(days=1),
    "SLIDING_TOKEN_LIFETIME": datetime.timedelta(days=7),
    "SLIDING_TOKEN_REFRESH_ON_LOGIN": True,
    "SLIDING_TOKEN_REFRESH_ON_REFRESH": True,
    "SLIDING_TOKEN_LIFETIME_REFRESH_DELTA": datetime.timedelta(days=1),
    "SLIDING_TOKEN_REFRESH_EQUAL": True,
    "ALGORITHM": "HS256",
    "SIGNING_KEY": SECRET_KEY,
    "VERIFYING_KEY": None,
    "AUTH_HEADER_TYPES": ("Bearer",),
}