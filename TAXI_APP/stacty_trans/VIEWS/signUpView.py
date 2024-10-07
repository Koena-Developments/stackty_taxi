from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from stacty_trans.models import User, Taxi_Driver
from stacty_trans.serializer.serializers import UserSerializer, TaxiDriverSerializer

class SignUpView(APIView):
    def post(self, request):
        role = request.data.get('role')
        if role == 'taxi_driver':
            serializer = TaxiDriverSerializer(data=request.data)
        else:
            serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Account created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
