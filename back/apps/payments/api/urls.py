from django.urls import path
from .views import PaymentViewSet

urlpatterns = [
    path('payments/', PaymentViewSet.as_view({'get': 'list'}), name='payment-list'),
    path('payments/<int:user>/', PaymentViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='payment-detail'),
]
