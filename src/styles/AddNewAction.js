import { styled } from "@mui/system";
import MuiFab from "@mui/material/Fab";

export const Fab = styled(MuiFab)`
  background-color: ${(props) => props.bgcolor || "red"};
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &:hover,
  &:focus {
    background-color: ${(props) => props.bgcolor || "red"};
  }
`;
