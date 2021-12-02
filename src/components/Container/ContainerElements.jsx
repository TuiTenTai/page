import React, { useEffect } from "react";
import OptionIconPNG from "./image/option-icon.png";

export function ContentItem({
  data,
  setModalType,
  setShowModal,
  setSelectedData,
}) {
  // All className 'show' to all .content-item elements
  useEffect(() => {
    const contentItems = document.querySelectorAll(".content-item");
    contentItems.forEach((item) => item.classList.add("show"));
  }, []);

  return (
    <div className={`content-item ${data.status}`}>
      <a
        href={data.link}
        className="item-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={data.img} alt="" className="item-img" />
        <p className="item-name">{data.name}</p>
      </a>
      <div
        className="option-button"
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
}
