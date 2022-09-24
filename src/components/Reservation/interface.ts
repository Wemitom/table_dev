export interface ReservationInfo {
  img: string;
  name: string;
  date: Date;
  type: 'current' | 'history' | 'favorites';
  inFavorites: boolean;
}
