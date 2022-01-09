import React from "react";
import { PaginationBox, PaginationBar } from "styles/Pagination";

const Pagination = ({ count, setPageCount }) => {
  const handleChange = (e, value) => {
    setPageCount(value);
  };

  return (
    <PaginationBox>
      <PaginationBar
        variant="outlined"
        count={count}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </PaginationBox>
  );
};

export default Pagination;
