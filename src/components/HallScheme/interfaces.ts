import { option } from '../ChooseRestaurant/interfaces';

export interface HallSchemeState {
  date: option;
  time: option;
  numGuests: option;
  lenStay: option;
}

export enum HallSchemeStateActionType {
  Date = 'DATE',
  Time = 'TIME',
  NumGuests = 'NUM_GUESTS',
  LenStay = 'LEN_STAY',
}

export interface HallSchemeStateAction {
  payload: option;
  type: HallSchemeStateActionType;
}

export interface RectSVG {
  type: 'rect';
  x: string;
  y: string;
  width: string;
  height: string;
  rx: string;
  transform?: string;
}

export interface ElliplseSVG {
  type: 'ellipse';
  cx: string;
  cy: string;
  rx: string;
  ry: string;
  transform?: string;
}

export interface HallLayout {
  tables: (RectSVG | ElliplseSVG)[][];
  labels: string[];
}
