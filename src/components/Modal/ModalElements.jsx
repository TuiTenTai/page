import React from "react";

export function InputField({ placeHolder, value }) {
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
}

export function SelectField({ name, optionList, value }) {
  return (
    <div className="modal-select">
      <label className="select-title">{`${name}: `}</label>
      <select
        className="select-tag"
        id={name.toLowerCase()}
        defaultValue={value}
      >
        {optionList.map((opt) => (
          <option value={opt.toLowerCase()} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
export function ModalButton({ text, color, onClick }) {
  return (
    <div className="modal-btn">
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
