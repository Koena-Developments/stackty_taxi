from rest_framework import viewsets
from stacty_trans.models import Taxi_Driver
from stacty_trans.serializer.serializers import UserSerializer, TaxiSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


class TaxiDriverViewSet(viewsets.ModelViewSet):
    queryset = Taxi_Driver.objects.all()
    serializer_class = TaxiSerializer

