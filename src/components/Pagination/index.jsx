import React from "react";
import { itemPerPage } from "constant";
import { PaginationBox } from "styles/Pagination";
import MuiPagination from "@mui/material/Pagination";

const Pagination = ({ list, setPageCount }) => {
  const count = Math.floor(list.length / itemPerPage) + 1;

  const handleChange = (e, value) => {
    setPageCount(value);
  };

  return (
    <>
      {list.length !== 0 && (
        <PaginationBox>
          <MuiPagination
            sx={{ color: "white" }}
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
