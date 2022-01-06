import React from "react";
import { capitalize } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { formContentSelector } from "reducers/form";
import { changeContentValue } from "actions/form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "styles/Modal";

const ModalSelect = ({ type, values, defaultValue }) => {
  const formContentState = useSelector(formContentSelector);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newFormContent = { ...formContentState };
    newFormContent[type.toLowerCase()] = e.target.value;
    dispatch(changeContentValue(newFormContent));
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel sx={{ color: "white" }}>{type}</InputLabel>
      <Select label={type} onChange={handleChange} defaultValue={defaultValue}>
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {capitalize(value)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ModalSelect;
