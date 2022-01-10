import { changeCountValue, changeSearchValue } from "reducers/filter";

export const searchChange = (value) => ({
  type: changeSearchValue,
  payload: value,
});

export const pageCountChange = (value) => ({
  type: changeCountValue,
  payload: value,
});
