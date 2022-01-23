import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import MuiCardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

/* Container */
export const CardsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.8rem;

  @media (max-width: 500px) {
    & {
      grid-template-columns: 2;
    }
  }
`;

export const Container = styled(Card)`
  position: relative;
  height: min-content;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);

  &:hover div.card-name {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover img.card-media {
    filter: blur(1px);
    transform: scale(1.1);
  }
`;

/* Card Media */
export const CardMedia = styled(MuiCardMedia)`
  transition: 200ms ease-in-out;
`;

/* Card Title */
export const TitleContainer = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
`;

export const Title = styled(Typography)`
  position: absolute;
  left: 0.25rem;
  bottom: 0.25rem;
`;
