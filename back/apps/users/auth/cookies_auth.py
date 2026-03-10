from rest_framework_simplejwt.authentication import JWTAuthentication

class CookiesJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('access_token')
        if token is None:
            return None 
        validated_token = self.get_validated_token(token)
        try:
            user = self.get_user(validated_token)
        except:
            return None
        return (user, validated_token)