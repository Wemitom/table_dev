export interface ChooseRestaurantState {
  area: option;
  street: option;
  cuisine: option;
}

export interface option {
  label: string | string[] | null;
  value: number | string | string[] | null;
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
  Cuisine = 'CUISINE',
}

export interface ChooseRestarauntAction {
  type: ChooseRestarauntActionType;
  payload: option;
}

export interface ChooseRestarauntResult {
  name: string;
  cuisine: string[];
  location_long: string;
  location_lat: string;
}

export interface RestarauntsInfo {
  result: ChooseRestarauntResult[];
  limit: number;
  size: number;
}
