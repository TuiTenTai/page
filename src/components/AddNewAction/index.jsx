import React from "react";
import { useDispatch } from "react-redux";
import {
  reverseIsShowValue,
  changeFormType,
  resetContentValue,
} from "actions/form";
import { styled } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const StyledFab = styled(Fab)`
  background-color: ${(props) => props.bgcolor || "red"};
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &:hover,
  &:focus {
    background-color: ${(props) => props.bgcolor || "red"};
  }
`;

const AddNewAction = () => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(reverseIsShowValue());
    dispatch(changeFormType("add"));
    dispatch(resetContentValue());
  };

  return (
    <StyledFab bgcolor="#c41b1b" onClick={onHandleClick}>
      <AddIcon />
    </StyledFab>
  );
};

export default AddNewAction;
