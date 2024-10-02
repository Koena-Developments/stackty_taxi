from django.urls import path, include
from rest_framework.routers import DefaultRouter
from VIEWS.user_views import UserViewSet
from VIEWS.Taxi_Driver import TaxiDriverViewSet
from VIEWS.fare_ride import FareRideViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'taxi-drivers', TaxiDriverViewSet)
router.register(r'fare-rides', FareRideViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]