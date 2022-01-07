import React from "react";
import { Title, TitleContainer } from "styles/Card";
const CardTitle = ({ title }) => {
  return (
    <TitleContainer className="card-name">
      <Title>{title}</Title>
    </TitleContainer>
  );
};

export default CardTitle;
