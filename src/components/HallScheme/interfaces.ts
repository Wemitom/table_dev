export interface HallSchemeState {
  date: string;
  time: string;
  numGuests: number;
}

export enum HallSchemeStateActionType {
  Date = 'DATE',
  Time = 'TIME',
  NumGuests = 'NUM_GUESTS',
}

export interface HallSchemeStateAction {
  payload: string | number;
  type: HallSchemeStateActionType;
}
