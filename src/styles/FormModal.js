import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiTextField from "@mui/material/TextField";
import MuiSelect from "@mui/material/Select";

/* Container */
export const ModalBox = styled(Box)`
  background-color: #212529;
  border-radius: 1px;
  padding: 1.75rem 1.75rem 1rem 1.75rem;
  width: calc(12% + 12rem);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/* Modal Content */
export const ModalTitle = styled(Typography)`
  font-family: "Lora";
  font-size: 1.9rem;
  font-weight: bold;
  text-align: center;
`;

export const ModalContentGroup = styled("div")`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-flow: column;
  gap: 1rem;
`;

export const TextField = styled(MuiTextField)`
  width: 100%;
  height: 3rem;

  input,
  label {
    color: white;
  }

  input {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const Select = styled(MuiSelect)`
  padding: 0.5rem;
  color: white;
`;

export const ModalButtonGroup = styled("div")`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
