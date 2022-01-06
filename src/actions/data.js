export const fetchApiSuccess = (data) => ({
  type: "data/Fetch_success",
  payload: data,
});

export const fetchApiFail = (err) => ({
  type: "data/Fetch_fail",
  error: err,
});

export const changeSelectedData = (data) => ({
  type: "data/changeSelectedData",
  payload: data,
});

export const addData = (data) => ({
  type: "data/Add",
  payload: data,
});

export const updateData = (data) => ({
  type: "data/Update",
  payload: data,
});

export const deleteData = (data) => ({
  type: "data/Delete",
  payload: data,
});
