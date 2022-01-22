import { styled } from "@mui/system";
import Typical from "react-typical";

export const Container = styled("div")`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const TypicalTitle = styled(Typical)`
  width: max-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(3vw + 15px);
  font-family: "Maxwell";
  text-align: center;
  text-shadow: 10px 10px rgba(0, 0, 0, 0.3);
`;
