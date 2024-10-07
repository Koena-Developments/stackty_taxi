from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .VIEWS.fare_ride import FareRideViewSet
from .VIEWS.auth_views import LoginView, LogoutView
from .VIEWS.Taxi_Driver import TaxiDriverViewSet
from .VIEWS.user_views import UserViewSet
from .VIEWS import SignUpView

# Create a router instance
router = DefaultRouter()

# Register ViewSets with the router
router.register(r'users', UserViewSet, basename='user')
router.register(r'taxis', TaxiDriverViewSet, basename='taxi')
router.register(r'farerides', FareRideViewSet, basename='fareride')

# Define URL patterns
urlpatterns = [
    path('', include(router.urls)),  
    path('login/', LoginView.as_view(), name='login'),  
    path('logout/', LogoutView.as_view(), name='logout'),
    path('signup/', SignUpView.as_view(), name='signup')
]
