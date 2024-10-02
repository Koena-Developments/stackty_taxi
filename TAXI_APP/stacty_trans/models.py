from django.db import models

# Create your models here.

# THE USER_DB FIELDS:



class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=30)
    location = models.BooleanField(default=False)
    # destination = models.Choices()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

class Taxi_Driver(models.Model):
    driver_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=30)
    license_number = models.CharField(max_length=30)
    number_plate = models.CharField(max_length=50)
    image_url = models.ImageField()
    live_location = models.BooleanField(default=False)
    # status = models.Choices()

class Fare_ride(models.Model):
    request_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    # location = models.Choices()
    # destination = models.Choices(
    request_time = models.DateTimeField()
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('completed', 'Completed'),
        ('canceled', 'Canceled'),
    ], default='pending')