export interface User {
  firstName: string;
  lastName: string;
  profileImg: string;
  email: string;
  phoneNum: string;
}

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

export enum Languages {
  en = 'English',
  ru = 'Русский',
}

export interface LocalizationState {
  language: Languages;
  translations: any;
}
