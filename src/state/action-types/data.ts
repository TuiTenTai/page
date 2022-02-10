import { typeInterface, statusInterface } from 'constant/interface';
export enum ActionType {
  FETCHSUCCES = 'data/Fetch_success',
  FETCHFAIL = 'data/Fetch_fail',
  ADDNEW = 'data/Add_new',
  UPDATE = 'data/Update',
  DELETE = 'data/Delete',
}

export interface Data {
  _id: string;
  name: string;
  link: string;
  imageURL: string;
  type: typeInterface;
  status: statusInterface;
}

interface FetchSuccessAction {
  type: ActionType.FETCHSUCCES;
  payload: Data[];
}

interface FetchFailAction {
  type: ActionType.FETCHFAIL;
  payload: unknown;
}

interface AddNewAction {
  type: ActionType.ADDNEW;
  payload: Data;
}

interface UpdateDataAction {
  type: ActionType.UPDATE;
  payload: Data;
}

interface DeleteDataAction {
  type: ActionType.DELETE;
  payload: string;
}

export type Action =
  | FetchSuccessAction
  | FetchFailAction
  | AddNewAction
  | UpdateDataAction
  | DeleteDataAction;
