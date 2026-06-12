from django.db import models

# Create your models here.
class Product (models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.CharField(max_length=50)
    badge = models.CharField(max_length=20, blank=True)
    imageUrl = models.URLField(max_length=500)
    imageAlt = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
