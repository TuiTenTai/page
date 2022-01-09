import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "api";
import { changeFormType, reverseIsShowValue } from "actions/form";
import { formContentSelector } from "reducers/form";
import { deleteData } from "actions/data";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const RightClickMenu = ({ x, y, isShow }) => {
  const formContent = useSelector(formContentSelector);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(changeFormType("edit"));
    dispatch(reverseIsShowValue());
  };

  const handleDelete = async () => {
    try {
      await api.delete("", { data: { _id: formContent._id } });
      dispatch(deleteData(formContent));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isShow && (
        <Paper
          sx={{
            width: "100px",
            height: "85px",
            position: "fixed",
            top: y,
            left: x,
          }}
        >
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
