from rest_framework import viewsets
from stacty_trans.models import User
from TAXI_APP.stacty_trans.serializer.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer