import { changeSearchValue } from "reducers/search";

export const searchChangeValue = (value) => ({
  type: changeSearchValue,
  payload: value,
});

export const resetSearchValue = () => ({
  type: changeSearchValue,
  payload: "",
});
