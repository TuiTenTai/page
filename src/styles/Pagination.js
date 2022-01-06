import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

export const PaginationBox = styled(Box)`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const PaginationBar = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white;
  }
`;
