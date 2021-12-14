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
  const filterData = data
    .filter((data) => data.type === type)
    .filter((data) => status === "all" || data.status === status)
    .filter(
      (data) =>
        searchInput === "" || data.name.toLowerCase().includes(searchInput)
    );

  return (
    <div className="container">
      {filterData.map((data) => (
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
