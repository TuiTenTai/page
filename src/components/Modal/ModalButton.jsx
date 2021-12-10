import React from "react";

const ModalButton = ({ text, color, onClick }) => {
  return (
    <div className="modal-btn">
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ModalButton;
