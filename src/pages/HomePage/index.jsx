import React from "react";
import { styled } from "@mui/system";
import Typical from "react-typical";

const StyledTypical = styled(Typical)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(3vw + 15px);
  font-family: "Gabriela";
  text-align: center;
  text-shadow: 10px 10px rgba(0, 0, 0, 0.3);
`;

const displayText = [
  "My Anime List", // Text display
  1500, // Time delay
  "My Manga List",
  1500,
  "My Lightnovel List",
  1500,
];

const HomePage = () => {
  return <StyledTypical steps={displayText} loop={Infinity} wrapper="p" />;
};

export default HomePage;
