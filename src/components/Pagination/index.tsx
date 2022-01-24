import React from 'react';
import { PaginationBox, PaginationBar } from 'styles/Pagination';

interface PaginationProps {
  count: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, setCurrentPage }) => {
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <PaginationBox>
      <PaginationBar
        variant='outlined'
        count={count}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </PaginationBox>
  );
};

export default Pagination;
