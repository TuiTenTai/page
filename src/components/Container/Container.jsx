import React from "react";
import { ContentItem } from "./ContainerElements";
import "./index.css";

function Container({
  data,
  type,
  setModalType,
  setShowModal,
  setSelectedData,
}) {
  const newData = [...data].filter((item) => item.type === type);

  return (
    <div className="container">
      {newData.lenght !== 0 &&
        newData.map((dataItem) => (
          <ContentItem
            key={dataItem._id}
            data={dataItem}
            setModalType={setModalType}
            setShowModal={setShowModal}
            setSelectedData={setSelectedData}
          />
        ))}
    </div>
  );
}

export default Container;
