# DON'T NEED ADMIN IN THIS CASE SO COMMENT IT OUT
# from django.contrib import admin

# This is where you define the URL patterns for your API application. It specifies which views should be called when specific URLs are accessed

# from django.urls import path

# from .views import TestView
# from rest_framework_jwt.views import refresh_jwt_token, verify_jwt_token


from django.urls import path

from .views import TestView #the views is from views.py file

#import all the views from the views.py so that the url knows the view to go to
from .views import StockAccountView, StockPriceView, StockSearchView, UserRegistrationView


#you are importing all of this from settings
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

urlpatterns = [
    path("test", TestView.as_view()), #this the url after the 
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"), # this is to refresh the token
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"), #t his is to verify the token
    path('stockaccount/', StockAccountView.as_view(), name='stock-account'),
    path('stockprice/', StockPriceView.as_view(), name='stock-price'), # to get the stock data then its price
    path('stocksearch/', StockSearchView.as_view(), name='stock-search'),  # Add this URL path for stock search
    path('register/', UserRegistrationView.as_view(), name='user-registration'), # url to register the users


]


#this userAPI url will now look like localhost:8000/api/v1.0/user/test - this url is linking to the views in views.py
