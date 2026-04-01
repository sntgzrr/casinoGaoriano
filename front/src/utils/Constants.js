export const DOMAIN_BACK_NAME = import.meta.env.VITE_API_URL
export const LOGIN_URL = `${DOMAIN_BACK_NAME}/api/auth/token/`
export const IS_AUTHENTICATED_URL = `${DOMAIN_BACK_NAME}/api/auth/authenticated/`
export const IS_ADMIN_URL = `${DOMAIN_BACK_NAME}/api/auth/admin/`
export const REFRESH_URL = `${DOMAIN_BACK_NAME}/api/auth/token/refresh/`
export const LOGOUT_URL = `${DOMAIN_BACK_NAME}/api/auth/logout/`