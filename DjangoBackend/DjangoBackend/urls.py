"""
URL configuration for DjangoBackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include

#ANY REQUEST COMES IN THROUGH THIS URLS.PY BEFORE GOING TO THE API URLS.PY

# This is where you define the URL patterns for your app. It specifies which views should be called when specific URLs are accessed
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("admin/", admin.site.urls),

    #tell the main url file the urls it needs to send to urls in the api folder
    path("api/v1.0/", include('userAPI.urls')) # includes URL patterns defined in the 'userAPI.urls' module, which is intended for routing API-related requests for user-related functionality.
]

#THE LOGIC:
# the normal django runs on localhost:8000
# the admin runs on localhost:8000/admin
# the views from api is localhost8000/api/v1.0/user/