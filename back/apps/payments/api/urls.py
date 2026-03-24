from django.urls import path
from .views import PaymentViewSet

urlpatterns = [
    path('payments/', PaymentViewSet.as_view({'get': 'list'}), name='payment-list'),
    path('payments/<int:pk>/', PaymentViewSet.as_view({'put': 'update'}), name='update-payment'),
]
