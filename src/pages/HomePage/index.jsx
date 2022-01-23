import React from "react";
import { homePageDisplayText } from "constant";
import { Container, TypicalTitle } from "styles/HomePage";

const HomePage = () => {
  return (
    <Container>
      <TypicalTitle steps={homePageDisplayText} loop={Infinity} wrapper="p" />
    </Container>
  );
};

export default HomePage;
