import {
  formReverseIsShowValue,
  formChangeType,
  formChangeContentValue,
  fromResetContentValue,
} from "reducers/form";

export const reverseIsShowValue = () => ({
  type: formReverseIsShowValue,
});

export const changeFormType = (type) => ({
  type: formChangeType,
  payload: type,
});

export const changeContentValue = (data) => ({
  type: formChangeContentValue,
  payload: data,
});

export const resetContentValue = () => ({
  type: fromResetContentValue,
});
