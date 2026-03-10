from django.urls import path
from .views import CustomTokenObtainPairView, CustomRefreshTokenView, log_out, is_authenticated

urlpatterns = [
    path('auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh'),
    path('auth/logout/', log_out, name='log_out'),
    path('auth/authenticated/', is_authenticated, name='is_authenticated'),
]
