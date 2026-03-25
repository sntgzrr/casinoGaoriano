from rest_framework.views import exception_handler
from rest_framework.exceptions import NotAuthenticated
from rest_framework.response import Response
from rest_framework import status

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if isinstance(exc, NotAuthenticated):
        response.data = {
            'status': 'error',
            'code': status.HTTP_401_UNAUTHORIZED,
            'message': 'No se proporcionaron credenciales válidas o son incorrectas.',
            'data': None
        }

    return response
