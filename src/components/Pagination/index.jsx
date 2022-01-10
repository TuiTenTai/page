import React from "react";
import { PaginationBox, PaginationBar } from "styles/Pagination";

const Pagination = ({ count, setCurrentPage }) => {
  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <PaginationBox>
      <PaginationBar
        variant="outlined"
        count={count}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </PaginationBox>
  );
};

export default Pagination;
