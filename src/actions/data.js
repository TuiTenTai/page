import {
  dataFetchSuccess,
  dataFetchFail,
  dataAddNew,
  dataUpdate,
  dataDelete,
} from "reducers/data";

export const fetchApiSuccess = (data) => ({
  type: dataFetchSuccess,
  payload: data,
});

export const fetchApiFail = (err) => ({
  type: dataFetchFail,
  error: err,
});

export const addData = (data) => ({
  type: dataAddNew,
  payload: data,
});

export const updateData = (data) => ({
  type: dataUpdate,
  payload: data,
});

export const deleteData = (data) => ({
  type: dataDelete,
  payload: data,
});
