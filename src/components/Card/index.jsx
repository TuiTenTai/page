import React, { useState } from "react";
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import { Container, CardMedia, Title, TitleContainer } from "styles/Card";

const Card = ({ content }) => {
  const [IsLoad, setIsLoad] = useState(true);

  const handleLoaded = () => {
    setIsLoad(false);
  };

  return (
    <Container>
      <Link href={content.link} target="_blank" rel="noreferrer">
        {IsLoad && (
          <Skeleton variant="rectangular" height="14rem" animation="wave" />
        )}
        <CardMedia
          className="card-media"
          component="img"
          image={content.img}
          alt=""
          onLoad={handleLoaded}
          sx={{ display: IsLoad ? "none" : "block" }}
        />
        <TitleContainer className="card-name">
          <Title>{content.name}</Title>
        </TitleContainer>
      </Link>
    </Container>
  );
};

export default Card;
