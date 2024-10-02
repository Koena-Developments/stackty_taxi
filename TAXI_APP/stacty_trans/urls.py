from django.urls import path
from .VIEWS.Taxi_Driver import TaxiDriverViewSet
from .VIEWS.auth_views import LoginView, LogoutView


urlpatterns = [
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('home', TaxiDriverViewSet.as_view, name='home'),
     

]
