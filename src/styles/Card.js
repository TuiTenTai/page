import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

/* Container */
export const CardContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.8rem;

  @media (max-width: 500px) {
    & {
      grid-template-columns: 2;
    }
  }
`;

/* Card Title */
export const TitleContainer = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled(Typography)`
  position: absolute;
  left: 0.25rem;
  bottom: 0.25rem;
`;
