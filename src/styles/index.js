import styled, { createGlobalStyle } from "styled-components";
import { styled as MuiStyled } from "@mui/system";
import MuiAppBar from "@mui/material/AppBar";
import { Link as RouterLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Gabriela from "fonts/Gabriela.ttf";
import Lora from "fonts/Lora.ttf";
import Roboto from "fonts/Roboto.ttf";

export const AppBar = MuiStyled(MuiAppBar)`
  background: transparent !important;
  box-shadow: none;

  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default createGlobalStyle`
  @font-face {
    font-family: 'Gabriela';
    src: url(${Gabriela});
  }

  @font-face {
    font-family: 'Lora';
    src: url(${Lora});
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    user-select: none;
    font-family: 'Roboto'
  }

  body {
    background-color: #0f0f0f;
  }

  #app-root {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-image: linear-gradient(
      to right top, 
      #292929, 
      #2e2e2f, 
      #333335, 
      #38393b, 
      #3d3e41, 
      #414347, 
      #45484d, 
      #494d53, 
      #4d5359, 
      #525960, 
      #565f66, 
      #5a656c
    );
  }

  .MuiPaper-root {
    background-color: #1c1c1c;
  }

  /* --- Sroll bar --- */
  /* Width */
  ::-webkit-scrollbar {
  width: 0.2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(0, 0, 0);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #686868;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #777777;
  }
`;
