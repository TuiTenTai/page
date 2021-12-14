import React from "react";
import OptionIconPNG from "./image/option-icon.png";

const Card = ({ data, setModalType, setShowModal, setSelectedData }) => {
  return (
    <div className="card">
      <a
        href={data.link}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={data.img} alt="" className="card-img" />
        <p className="card-name">{data.name}</p>
      </a>
      <div
        className="option-button"
        onClick={() => {
          setSelectedData(data);
          setModalType("update");
          setShowModal(true);
        }}
      >
        <div className="option">
          <img src={OptionIconPNG} alt="" className="option-icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
