# from django.urls import path 

# from . import views

# urlpatterns = [
#     path('login/', views.login_api),
#     path('user/', views.get_user_data),
#     path('register/', views.register_api ),
#     path('logout/', knox_views.LogoutView.as_view()),
#     path('logoutall/', knox_views.LogoutAllView.as_view())

# ]

from django.urls import path 


from . import views
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('test', views.Test_View),
    # path('login/', views.login_api),
    # path('user/', views.get_user_data),
    # path('register/', views.register_api ),


]