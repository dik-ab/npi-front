const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const ENDPOINTS = {
  auth: {
    login: `${BASE_URL}/accounts/login/`,
    logout: `${BASE_URL}/logout/`,
    refreshToken: `${BASE_URL}/accounts/token/refresh/`,
  },
  accounts: `${BASE_URL}/accounts`
};
