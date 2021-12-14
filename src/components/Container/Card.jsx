import React from "react";
import OptionIconPNG from "./option-icon.png";

const Card = ({ data, setModalType, setShowModal, setSelectedData }) => {
  return (
    <div className="item-card">
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
        className="option"
        onClick={() => {
          setSelectedData(data);
          setModalType("update");
          setShowModal(true);
        }}
      >
        <img src={OptionIconPNG} alt="" className="option-icon" />
      </div>
    </div>
  );
};

export default Card;
