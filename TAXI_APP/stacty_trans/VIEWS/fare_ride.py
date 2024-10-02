from rest_framework import viewsets
from stacty_trans.models import Fare_ride
from TAXI_APP.stacty_trans.serializer.serializers import FareRideSerializer



class FareRideViewSet(viewsets.ModelViewSet):
    queryset = Fare_ride.objects.all()
    serializer_class = FareRideSerializer