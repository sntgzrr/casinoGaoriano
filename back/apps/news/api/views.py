from rest_framework import viewsets, permissions
from ..models import News
from ..serializers import NewsSerializer

# Create your views here.
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    serializer_class = NewsSerializer
