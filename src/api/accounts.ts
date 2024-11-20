import { ENDPOINTS } from "./endpoints";

export const register = async (email: string, password: string): Promise<void> => {
  const response = await fetch(ENDPOINTS.accounts, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }
};

export const fetchUserInfo = async (email: string, password: string): Promise<void> => {
  const response = await fetch(ENDPOINTS.accounts, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }
};