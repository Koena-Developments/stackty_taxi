from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

class LoginView(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return Response({"message": "Logged out"}, status=status.HTTP_200_OK)