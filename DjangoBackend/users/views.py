# from rest_framework.decorators import api_view, permission_classes
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.authtoken.serializers import AuthTokenSerializer
# from knox.auth import AuthToken
# from .serializers import RegisterSerializer
# from rest_framework.permissions import AllowAny

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def Test_View(request, format=None):
    print("API Was Called")
    return Response("You Made It", status=201)


# # Create your views here.
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login_api(request):
#     serializer = AuthTokenSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     user = serializer.validated_data['user']

#     __, token = AuthToken.objects.create(user)

#     # Customize the response format
#     response_data = {
#         'message': 'Sign in successful.',
#         'user_info': {
#             'id': user.id,
#             'username': user.username,
#             'email': user.email,
#             'first_name': user.first_name,
#             'last_name': user.last_name,
#         },
#         'token': token,
#     }

#     return Response(response_data)


# @api_view(['GET'])
# def get_user_data(request):
#     user = request.user

#     if user.is_authenticated:
        
#         return Response({
#             'user_info': {
#                 'id': user.id,
#                 'username': user.username,
#                 'email': user.email
#                 },
#         })

#     return Response({'error': 'not authenticated'}, status=400)




# @api_view(['POST'])
# def register_api(request):
#     serializer = RegisterSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)

#     user = serializer.save()

#     __, token = AuthToken.objects.create(user)

#     # Include the token in the response
#     response_data = {
#         'message': 'User registered successfully.',
#         'user': {
#             'id': user.id,
#             'username': user.username,
#             'email': user.email,
#             'first_name': user.first_name,
#             'last_name': user.last_name,
#         },
#         'token': token,
#     }

#     return Response(response_data, status=status.HTTP_201_CREATED)
