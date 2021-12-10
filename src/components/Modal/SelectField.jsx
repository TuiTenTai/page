import React from "react";

const SelectField = ({ name, optionList, value }) => {
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
};

export default SelectField;
