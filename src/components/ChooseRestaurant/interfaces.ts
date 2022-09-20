export interface ChooseRestaurantState {
  area: string;
  street: string;
  cuisine: string;
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
  payload: string;
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
