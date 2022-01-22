import React from "react";
// import { useSelector } from "react-redux";
// import { pendingSelector } from "reducers/data";
import { homePageDisplayText } from "constant";
// import { Loading } from "styles";
import { Container, TypicalTitle } from "styles/HomePage";

const HomePage = () => {
  // const isPending = useSelector(pendingSelector);

  // if (isPending) return <Loading size={50} />;
  return (
    <Container>
      <TypicalTitle steps={homePageDisplayText} loop={Infinity} wrapper="p" />
    </Container>
  );
};

export default HomePage;
