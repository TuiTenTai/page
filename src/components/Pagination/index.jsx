import React from "react";
import { itemPerPage } from "constant";
import { PaginationBox, PaginationBar } from "styles/Pagination";

const Pagination = ({ list, setPageCount }) => {
  const count = Math.floor(list.length / itemPerPage) + 1;

  const handleChange = (e, value) => {
    setPageCount(value);
  };

  return (
    <>
      {list.length !== 0 && (
        <PaginationBox>
          <PaginationBar
            variant="outlined"
            color="primary"
            count={count}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </PaginationBox>
      )}
    </>
  );
};

export default Pagination;
