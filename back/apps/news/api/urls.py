from django.urls import path
from .views import NewsViewSet

urlpatterns = [
    path('news/', NewsViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('news/<int:pk>/', NewsViewSet.as_view({'put': 'update', 'delete': 'destroy'})),
]
