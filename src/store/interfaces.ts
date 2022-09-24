export interface User {
  id_visitor: number;
  name: string;
  phone: string;
  email?: number;
}

export interface AuthState {
  token: string | null;
  refresh: string | null;
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
