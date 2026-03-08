from .models import News
from rest_framework import viewsets, permissions
from .serializers import NewsSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = NewsSerializer
