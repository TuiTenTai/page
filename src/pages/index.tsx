import React from 'react';
import { HOME_PAGE_DISPLAY_TITLE } from 'utils/constant';
import { Container, Typical } from 'styles/HomePage';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typical steps={HOME_PAGE_DISPLAY_TITLE} loop={Infinity} wrapper='p' />
    </Container>
  );
};

export default HomePage;
