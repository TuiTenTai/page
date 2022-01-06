import { styled } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

export const Bar = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #212121;
    padding: 1rem;
  }
`;

export const BarOpenButton = styled(IconButton)`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
`;
