export interface User {
  firstName: string;
  lastName: string;
  profileImg: string;
  email: string;
  phoneNum: string;
}

export interface AuthState {
  authToken: string | null;
  refreshToken: string | null;
  user: User | null;
}
