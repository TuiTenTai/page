export const searchChange = (value) => ({
  type: "filter/Search_change",
  payload: value,
});

export const typeChange = (type) => ({
  type: "filter/Type_change",
  payload: type,
});

export const statusChange = (status) => ({
  type: "filter/Status_change",
  payload: status,
});
