from rest_framework_simplejwt.authentication import JWTAuthentication

class HeaderJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        header_auth = self.get_header(request)
        if header_auth is None:
            return None

        raw_token = self.get_raw_token(header_auth)
        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)
        try:
            user = self.get_user(validated_token)
        except:
            return None
        return (user, validated_token)
