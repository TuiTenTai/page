import { Data, ActionType, Action } from 'state/action-types/data';

export const fetchApiSuccess = (data: Data[]): Action => ({
  type: ActionType.FETCHSUCCES,
  payload: data,
});

export const fetchApiFail = (err: unknown): Action => ({
  type: ActionType.FETCHFAIL,
  payload: err,
});

export const addNewData = (data: Data): Action => ({
  type: ActionType.ADDNEW,
  payload: data,
});

export const updateData = (data: Data): Action => ({
  type: ActionType.UPDATE,
  payload: data,
});

export const deleteData = (id: string): Action => ({
  type: ActionType.DELETE,
  payload: id,
});
