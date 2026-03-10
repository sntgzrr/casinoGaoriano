from rest_framework import routers
from .api import NewsViewSet

router = routers.DefaultRouter()
router.register('news', NewsViewSet, 'news')

urlpatterns = router.urls