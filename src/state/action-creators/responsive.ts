import { Action, ActionType } from 'state/action-types/responsive';

export const changeIsResponsiveValue = (): Action => ({
  type: ActionType.CHANGEVALUE,
});
