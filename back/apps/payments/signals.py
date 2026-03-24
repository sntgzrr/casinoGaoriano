from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .models import Payment

User = get_user_model()

@receiver(post_save, sender=User)
def create_payment_for_new_user(sender, instance, created, **kwargs):
    if created:
        Payment.objects.get_or_create(user=instance)
