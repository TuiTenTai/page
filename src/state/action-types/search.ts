export enum ActionType {
  CHANGEVALUE = 'search/Change_value',
  RESETVALUE = 'search/Reset_value',
}

interface ChangeValueAction {
  type: ActionType.CHANGEVALUE;
  payload: string;
}

interface ResetValueAction {
  type: ActionType.RESETVALUE;
}

export type Action = ChangeValueAction | ResetValueAction;
