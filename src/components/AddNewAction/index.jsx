import React from "react";
import { useDispatch } from "react-redux";
import {
  reverseIsShowValue,
  changeFormType,
  resetContentValue,
} from "actions/form";
import { Fab } from "styles/AddNewAction";
import AddIcon from "@mui/icons-material/Add";

const AddNewAction = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reverseIsShowValue());
    dispatch(changeFormType("add"));
    dispatch(resetContentValue());
  };

  return (
    <Fab aria-label="Add new button" bgcolor="#c41b1b" onClick={handleClick}>
      <AddIcon />
    </Fab>
  );
};

export default AddNewAction;
