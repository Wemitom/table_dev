export interface ChooseRestaurantState {
  area: string;
  street: string;
  cousine: string;
}

export interface MapState {
  center: number[];
  zoom: number;
}

export enum MapActionType {
  Center = 'CENTER',
  Zoom = 'ZOOM',
}

export interface MapAction {
  type: MapActionType;
  payload: string;
}

export enum ChooseRestarauntActionType {
  Area = 'AREA',
  Street = 'STREET',
  Cousine = 'COUSINE',
}

export interface ChooseRestarauntAction {
  type: ChooseRestarauntActionType;
  payload: string;
}

export interface RestarauntInfo {
  coords: number[];
  name: string;
}
