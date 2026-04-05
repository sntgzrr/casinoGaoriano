from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework import viewsets
from django.contrib.auth import get_user_model
from ..serializers import UserSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            tokens = response.data
            access_token = tokens['access']
            refresh_token = tokens['refresh']

            res = Response({
                'success': True,
                'access': access_token
            })

            res.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/api/token/refresh/'
            )
            return res
        return Response({'success': False}, status=response.status_code)

class CustomRefreshTokenView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh_token')
        if not refresh_token:
            return Response({'refreshed': False}, status=401)

        request.data['refresh'] = refresh_token
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            return Response({
                'refreshed': True,
                'access': response.data['access']
            })
        return Response({'refreshed': False}, status=response.status_code)

@api_view(['POST'])
def log_out(request):
    res = Response({'logged_out': True})
    res.delete_cookie('refresh_token', path='/api/token/refresh/')
    return res

class UsersViewsSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.filter(is_staff=0)
    permission_classes = [IsAuthenticated, IsAdminUser]
    serializer_class = UserSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def is_authenticated(request):
    return Response({
        'is_authenticated': True,
        'user': {
            'id': request.user.id,
            'username': request.user.username,
            'email': request.user.email,
            'admin': request.user.is_staff,
        }
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminUser])
def is_admin(request):
    return Response({'is_admin': True})
