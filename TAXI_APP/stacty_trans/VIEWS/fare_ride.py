from rest_framework import viewsets
from stacty_trans.models import Fare_ride
from stacty_trans.serializer.serializers import FareRideSerializer



class FareRideViewSet(viewsets.ModelViewSet):
    queryset = Fare_ride.objects.all()
    serializer_class = FareRideSerializer