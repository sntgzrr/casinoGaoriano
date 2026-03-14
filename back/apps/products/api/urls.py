from django.urls import path
from .views import ProductsViewSet

urlpatterns = [
    path('products/', ProductsViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('products/<int:pk>/', ProductsViewSet.as_view({'put': 'update', 'delete': 'destroy'})),
]
