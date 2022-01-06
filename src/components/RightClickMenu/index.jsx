import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFormType, reverseIsShowValue } from "actions/form";
import api from "api";
import { formContentSelector } from "reducers/form";
import { deleteData } from "actions/data";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const RightClickMenu = ({ x, y, isShow }) => {
  const formContentState = useSelector(formContentSelector);
  const dispatch = useDispatch();

  const style = {
    width: "100px",
    height: "85px",
    position: "fixed",
    top: y,
    left: x,
  };

  const handleEditClick = () => {
    dispatch(changeFormType("edit"));
    dispatch(reverseIsShowValue());
  };

  const handleDelete = () => {
    api
      .delete("", { data: { _id: formContentState._id } })
      .then(() => {
        dispatch(deleteData(formContentState));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {isShow && (
        <Paper sx={style}>
          <MenuList>
            <MenuItem onClick={handleEditClick}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </MenuList>
        </Paper>
      )}
    </>
  );
};

export default RightClickMenu;
