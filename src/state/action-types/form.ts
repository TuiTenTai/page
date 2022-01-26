import { Data } from './data';

export enum ActionType {
  REVERSESHOWVALUE = 'form/reverseIsShowValue',
  CHANGETYPE = 'form/changeType',
  CHANGECONTENT = 'form/changeContent',
  RESETCONTENT = 'form/resetContentValue',
}

interface ReverseShowValueAction {
  type: ActionType.REVERSESHOWVALUE;
}

interface ChangeTypeAction {
  type: ActionType.CHANGETYPE;
  payload: 'add' | 'edit';
}

interface ChangeContentAction {
  type: ActionType.CHANGECONTENT;
  payload: Data;
}

interface ResetContentAction {
  type: ActionType.RESETCONTENT;
}

export type Action =
  | ReverseShowValueAction
  | ChangeTypeAction
  | ChangeContentAction
  | ResetContentAction;
