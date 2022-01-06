import React from "react";
import { styled } from "@mui/material";

const ErrorText = styled("p")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: calc(3vw + 14px);
  text-shadow: 10px 10px rgba(0, 0, 0, 0.3);
`;

const NotFound = ({ errMess }) => {
  return <ErrorText>{errMess}</ErrorText>;
};

export default NotFound;
