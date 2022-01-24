import { Action, ActionType } from 'state/action-types/search';

export const searchChangeValue = (value: string): Action => ({
  type: ActionType.CHANGEVALUE,
  payload: value,
});

export const searchResetValue = (): Action => ({
  type: ActionType.RESETVALUE,
});
