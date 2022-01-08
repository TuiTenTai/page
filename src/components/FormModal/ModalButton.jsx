import React from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "api";
import { addData, updateData } from "actions/data";
import { formContentSelector } from "reducers/form";
import Button from "@mui/material/Button";

const ModalButton = ({ children, bgcolor, handleClose }) => {
  const formContent = useSelector(formContentSelector);
  const dispatch = useDispatch();
  const buttonStyles = {
    backgroundColor: bgcolor,
    borderRadius: 0,
    boxShadow: 0,

    "&:hover": {
      backgroundColor: bgcolor,
    },
  };

  const fetchAddNew = async () => {
    try {
      const reqData = { ...formContent };
      delete reqData._id;
      const resData = await api.post("", JSON.stringify(reqData));
      dispatch(addData(resData));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUpdate = async () => {
    try {
      await api.put("", JSON.stringify(formContent));
      dispatch(updateData(formContent));
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (e) => {
    const type = e.target.innerText;
    if (type === "CANCEL") handleClose();
    else if (
      formContent.name !== "" ||
      formContent.link !== "" ||
      formContent.img !== ""
    ) {
      switch (type) {
        case "ADD": {
          fetchAddNew();
          handleClose();
          break;
        }

        case "EDIT": {
          fetchUpdate();
          handleClose();
          break;
        }

        default:
          break;
      }
    } else {
      alert("Please enter require information...");
    }
  };

  return (
    <Button variant="contained" sx={buttonStyles} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ModalButton;
