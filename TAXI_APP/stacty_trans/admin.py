from django.contrib import admin
from .models import User, Fare_ride, Taxi_Driver
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')  
    search_fields = ('name', 'email') 

admin.site.register(User, UserAdmin)


class Taxi_DriverAdmin(admin.ModelAdmin):
    list_display = ('name', 'license_number') 
    search_fields = ('name', 'destination') 
admin.site.register(Taxi_Driver, Taxi_DriverAdmin)

class FareRideAdmin(admin.ModelAdmin):
    list_display = ('user', 'request_time', 'status')  
    list_filter = ('status',) 
    search_fields = ('user__name', 'status')


admin.site.register(Fare_ride, FareRideAdmin)