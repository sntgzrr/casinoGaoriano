from django.urls import path
from .views import PaymentViewSet

urlpatterns = [
    path('payments/<int:user>/', PaymentViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='payment-detail'),
]
