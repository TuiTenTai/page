import { pageCountChange } from "actions/filter";
import React from "react";
import { useDispatch } from "react-redux";
import { PaginationBox, PaginationBar } from "styles/Pagination";

const Pagination = ({ count }) => {
  const dispatch = useDispatch();

  const handlePageChange = (e, value) => {
    dispatch(pageCountChange(value));
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
