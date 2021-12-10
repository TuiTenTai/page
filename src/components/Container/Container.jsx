import React from "react";
import Card from "./Card";
import "./index.css";

const Container = ({
  data,
  type,
  setModalType,
  setShowModal,
  setSelectedData,
}) => {
  const newData = [...data].filter((item) => item.type === type);

  return (
    <div className="container">
      {newData.lenght !== 0 &&
        newData.map((dataItem) => (
          <Card
            key={dataItem._id}
            data={dataItem}
            setModalType={setModalType}
            setShowModal={setShowModal}
            setSelectedData={setSelectedData}
          />
        ))}
    </div>
  );
};

export default Container;
