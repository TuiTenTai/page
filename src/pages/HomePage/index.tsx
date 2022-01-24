import React from 'react';
import { homePageDisplayText } from 'constant';
import { Container, Typical } from 'styles/HomePage';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typical steps={homePageDisplayText} loop={Infinity} wrapper='p' />
    </Container>
  );
};

export default HomePage;
