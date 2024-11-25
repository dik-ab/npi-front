export interface User {
  id: number;
  name: string;
  email: string;
  lastLoginAt?: string | null;
  deletedAt?: string | null;
}
