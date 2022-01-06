export const reverseIsShowValue = () => ({
  type: "form/reverseIsShowValue",
});

export const changeFormType = (type) => ({
  type: "form/changeFormType",
  payload: type,
});

export const changeContentValue = (data) => ({
  type: "form/changeContentValue",
  payload: data,
});

export const resetContentValue = () => ({
  type: "form/resetContentValue",
});
