import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formContentSelector } from "reducers/form";
import { changeContentValue } from "actions/form";
import { TextField } from "styles/FormModal";

const ModalTextField = ({ text }) => {
  const formContent = useSelector(formContentSelector);
  const typeInput = text !== "Image" ? text.toLowerCase() : "img";
  const dispatch = useDispatch();

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    const newFormContent = { ...formContent };
    newFormContent[typeInput] = e.target.value;
    dispatch(changeContentValue(newFormContent));
  };

  return (
    <TextField
      label={text}
      placeholder={"Enter " + text + "..."}
      variant="standard"
      onFocus={handleFocus}
      onChange={handleChange}
      defaultValue={formContent[typeInput]}
    />
  );
};

export default ModalTextField;
