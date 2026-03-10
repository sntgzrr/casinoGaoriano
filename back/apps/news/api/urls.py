from django.urls import path
from .views import NewsViewSet

urlpatterns = [
    path('news/', NewsViewSet.as_view({'get': 'list', 'post': 'create'})),
]
