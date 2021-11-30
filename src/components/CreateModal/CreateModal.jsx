import React from "react";
import AddNewIconPNG from "./image/add-new.png";
import "./index.css";

function CreateModal({ setShowModal, setModalType, setSelectedData }) {
  return (
    <div
      className="add-new"
      onClick={() => {
        setShowModal(true);
        setModalType("create");
        setSelectedData({});
      }}
    >
      <img src={AddNewIconPNG} alt="" />
    </div>
  );
}

export default CreateModal;
