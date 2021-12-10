import React from "react";

const InputField = ({ placeHolder, value }) => {
  return (
    <div className="modal-input">
      <label>{`${placeHolder}:`}</label>
      <input
        type="text"
        placeholder={`Enter  ${placeHolder}`}
        id={`${placeHolder.toLowerCase()}-input`}
        onClick={(e) => e.target.select()}
        defaultValue={value}
      />
    </div>
  );
};

export default InputField;
