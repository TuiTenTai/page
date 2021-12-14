import React from "react";
import Card from "./Card";
import "./index.css";

const Container = ({
  data,
  type,
  status,
  searchInput,
  setModalType,
  setShowModal,
  setSelectedData,
}) => {
  const newData = [...data].filter((item) => item.type === type);

  return (
    <div className="container">
      {newData.lenght !== 0 &&
        newData
          .filter((data) => status === "all" || data.status === status)
          .filter(
            (data) =>
              searchInput === "" ||
              data.name.toLowerCase().includes(searchInput)
          )
          .map((data) => (
            <Card
              key={data._id}
              data={data}
              setModalType={setModalType}
              setShowModal={setShowModal}
              setSelectedData={setSelectedData}
            />
          ))}
    </div>
  );
};

export default Container;
