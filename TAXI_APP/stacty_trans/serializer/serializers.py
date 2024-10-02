from rest_framework import serializers
from models import User, Taxi_Driver, Fare_ride


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TaxiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taxi_Driver
        fields = '__all__'

class FareRideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fare_ride
        fields = '__all__'