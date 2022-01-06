import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardTitle from "./CardTitle";

const Card = ({ content }) => {
  return (
    <MuiCard sx={{ height: "min-content" }}>
      <CardActionArea>
        <Link href={content.link} target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            image={content.img}
            alt={content.name}
            loading="lazy"
          />
          <CardTitle title={content.name} />
        </Link>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
