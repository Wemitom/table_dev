/* Интерфейсы для аутентификации */
export interface User {
  id_visitor: number;
  name?: string;
  phone?: string;
  email?: string;
}

export interface AuthState {
  token: string | null;
  refresh: string | null;
  user: User | null;
  type: 'partner' | 'client' | null;
}
/*                            */

/* Интерфейсы для локализации */
export enum Languages {
  en = 'English',
  ru = 'Русский',
}

export interface LocalizationState {
  language: Languages;
  translations: any;
}
/*                            */

/* Интерфейсы для версии */
export interface VersionState {
  version: 'forClients' | 'forPartners';
}
