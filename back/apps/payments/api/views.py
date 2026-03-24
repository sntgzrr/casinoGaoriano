from rest_framework import viewsets, permissions

from ..serializers import PaymentSerializer
from ..models import Payment

# Create your views here.
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PaymentSerializer
