import React from "react";
import SlideBar from "components/SlideBar";
import { ErrorContent, ErrorMess, ErrorType } from "styles/ErrorPage";

const Error400 = () => {
  return (
    <>
      <SlideBar />
      <ErrorContent>
        <ErrorType>404</ErrorType>
        <ErrorMess>Not Found</ErrorMess>
      </ErrorContent>
    </>
  );
};

export default Error400;
