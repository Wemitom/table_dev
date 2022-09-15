export interface ChooseRestaurantState {
  area: string;
  street: string;
  cousine: string;
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
