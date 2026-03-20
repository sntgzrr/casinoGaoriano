from django.db import models

# Create your models here.

# auth_user model is used for authentication and user management, 
# so we don't need to create a custom user model unless we want to add additional fields or functionality. 
# If we do want to create a custom user model, 
# we can extend AbstractUser or AbstractBaseUser from django.contrib.auth.models.
