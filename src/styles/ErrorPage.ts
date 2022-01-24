import { styled } from "@mui/system";

export const ErrorContent = styled("div")`
  position: fixed;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorType = styled("h6")`
  font-size: calc(10vw + 5rem);
  height: min-content;
  font-family: "Hacked-KerX";
`;

export const ErrorMess = styled("p")`
  font-size: calc(2vw + 2rem);
  font-family: "Hacked-KerX";
`;
