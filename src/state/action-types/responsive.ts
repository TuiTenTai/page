export enum ActionType {
  CHANGEVALUE = 'isResponsive/Change_value',
}

interface ChanegValueAction {
  type: ActionType.CHANGEVALUE;
}

export type Action = ChanegValueAction;
