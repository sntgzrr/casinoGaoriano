from rest_framework import viewsets, permissions
from ..models import Product
from ..serializers import ProductSerializer

# Create your views here.
class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    serializer_class = ProductSerializer
