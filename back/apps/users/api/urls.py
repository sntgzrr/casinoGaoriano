from django.urls import path
from .views import CustomTokenObtainPairView, CustomRefreshTokenView

urlpatterns = [
    path('auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh'),
]
