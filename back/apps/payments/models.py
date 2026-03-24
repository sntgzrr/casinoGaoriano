from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Payment(models.Model): 
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    monday = models.BooleanField(default=False)
    tuesday = models.BooleanField(default=False)
    wednesday = models.BooleanField(default=False)
    thursday = models.BooleanField(default=False)
    friday = models.BooleanField(default=False)
    saturday = models.BooleanField(default=False)
    sunday = models.BooleanField(default=False)
    week = models.CharField(max_length=30)
