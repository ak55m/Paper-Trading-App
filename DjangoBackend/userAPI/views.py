from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import alpaca_trade_api as tradeapi
from alpaca_trade_api.common import URL
from alpaca_trade_api.stream import Stream
import aiohttp
import requests
from .models import UserProfile
from rest_framework import status



# import asyncio

# from alpaca_api import alpaca_trade_api as tradeapi



# Create your views here for the Django rest framework.
class TestView(APIView): #this is the view is from 

    # Handle POST requests to/from this view
    def post(self, request, format=None):
        print("API Was Called")
        return Response("You made It", status=200)



# To check if you are still connected to your account
class StockAccountView(APIView):
    def get(self, request):
        # Initialize the Alpaca API with your credentials
        api = tradeapi.REST('PK9BGNZPRRDQSK47AGRV', 'wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8', base_url='https://paper-api.alpaca.markets', api_version='v2')
        
        # Get account information
        account = api.get_account()
        
        # Create a dictionary from the account object
        account_data = {
            'account_number': account.account_number,
            'status': account.status,
            # Add more fields as needed
        }
        
        return Response(account_data)


# # To find the price of a stock
# class StockPriceView(APIView):
#     def get(self, request):
#         # Initialize the Alpaca API with your credentials
#         api = REST('PK9BGNZPRRDQSK47AGRV', 'wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8', base_url='https://paper-api.alpaca.markets', api_version='v2')

#         # Define the stock symbol (e.g., TSLA for Tesla)
#         symbol = 'TSLA'

#         # Get the current stock price
#         stock_price = api.get_last_trade(symbol)

#         return Response({"symbol": stock_price.symbol, "price": stock_price.price})


# Create a new view class named StockPriceView
# class StockPriceView(APIView):
#     def get(self, request):
#         # Initialize the Alpaca API with your credentials
#         api = tradeapi.REST('PK9BGNZPRRDQSK47AGRV', 'wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8', base_url='https://paper-api.alpaca.markets', api_version='v2')

#         # Get daily price data for AAPL over the last 5 trading days.
#         barset = api.get_barset('AAPL', 'day', limit=5)
#         aapl_bars = barset['AAPL']

#         # Calculate the open and close prices for the week.
#         week_open = aapl_bars[0].o
#         week_close = aapl_bars[-1].c

#         # Calculate the percentage change.
#         percent_change = (week_close - week_open) / week_open * 100

#         # Return the result as a JSON response
#         return Response({
#             'symbol': 'AAPL',
#             'week_open': week_open,
#             'week_close': week_close,
#             'percent_change': percent_change
#         })

class StockPriceView(APIView):
    def get(self, request):
        url = "https://data.alpaca.markets/v2/stocks/bars/latest?symbols=AAPL&feed=iex"

        headers = {
            "accept": "application/json",
            "APCA-API-KEY-ID": "PK9BGNZPRRDQSK47AGRV",
            "APCA-API-SECRET-KEY": "wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8"
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()
            return Response(data)
        else:
            return Response({"error": "Failed to retrieve stock price"}, status=response.status_code)


# async def trade_callback(t):
#     # You can process the real-time trade data here
#     print('trade', t)

# # Class for retrieving real-time stock price data
# class StockPriceView(APIView):
#     def get(self, request, symbol):
#         try:
#             # Initialize the Alpaca streaming connection
#             stream = Stream(
#                 "PK9BGNZPRRDQSK47AGRV",
#                 "wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8",
#                 base_url=URL('https://paper-api.alpaca.markets'),
#                 data_feed='iex'
#             )

#             # Subscribe to trade events for the specified symbol
#             stream.subscribe_trades(trade_callback, symbol)

#             # Run the stream
#             stream.run()

#             return Response({'message': f'Streaming real-time data for {symbol}'})
#         except Exception as e:
#             return Response({'error': str(e)})


# to search for the stock and its highest price. needs to be changed later to stream live data when searched in the watchlist
class StockSearchView(APIView):
    def get(self, request):
        query = request.query_params.get('query')

        if not query:
            return Response({"error": "Missing 'query' parameter"}, status=400)

        url = f"https://data.alpaca.markets/v2/stocks/bars/latest?symbols={query}&feed=iex"

        headers = {
            "accept": "application/json",
            "APCA-API-KEY-ID": "PK9BGNZPRRDQSK47AGRV",
            "APCA-API-SECRET-KEY": "wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8"
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()
            # Extract the 'bars.h' value from the response
            bars_h_value = data['bars'][query]['h']
            print(bars_h_value)
            return Response({"bars.h": bars_h_value})
        else:
            return Response({"error": "Failed to retrieve stock data"}, status=response.status_code)
        


# key:    PK9BGNZPRRDQSK47AGRV

# secret:     wtrkQqEqsS1os5DjuMJcDREtAEyZVKaXZ54xoMX8



class UserRegistrationView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Please provide both username and password.'}, status=status.HTTP_400_BAD_REQUEST)

        # Create a new user profile
        user_profile = UserProfile.objects.create(username=username, password=password)

        # You can set other attributes here if needed, e.g., user_profile.funds = 100000.0

        return Response({'message': 'User registered successfully.'}, status=status.HTTP_201_CREATED)