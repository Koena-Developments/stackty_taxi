from rest_framework import viewsets
from stacty_trans.models import User
from stacty_trans.serializer.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer