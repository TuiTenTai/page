import { Action, ActionType } from 'state/action-types/form';
import { Data } from 'state/action-types/data';

export const reverseIsShowValue = (): Action => ({
  type: ActionType.REVERSESHOWVALUE,
});

export const changeFormType = (type: string): Action => ({
  type: ActionType.CHANGETYPE,
  payload: type,
});

export const changeContentValue = (data: Data): Action => ({
  type: ActionType.CHANGECONTENT,
  payload: data,
});

export const resetContentValue = (): Action => ({
  type: ActionType.RESETCONTENT,
});
