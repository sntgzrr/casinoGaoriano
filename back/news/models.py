from django.db import models

# Create your models here.
class News (models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    imageUrl = models.CharField(max_length=500)
    imageAlt = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)