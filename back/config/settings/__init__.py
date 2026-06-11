import environ

env = environ.Env()

# Determine which settings file to use based on DEBUG environment variable
if env.bool('DEBUG'):
    from .dev import *
else:
    from .prod import *
