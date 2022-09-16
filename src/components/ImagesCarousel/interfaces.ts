export interface Slide {
  imgPath: string;
  title: string;
  description: string;
}

export enum CurSlideActionType {
  Next = 'NEXT',
  Prev = 'PREV',
  Set = 'SET',
}

export interface CurSlideAction {
  type: CurSlideActionType;
  payload?: number;
}
