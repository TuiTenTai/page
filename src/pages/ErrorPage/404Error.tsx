import React from 'react';
import Slidebar from 'components/Slidebar';
import { ErrorContent, ErrorMess, ErrorType } from 'styles/ErrorPage';

const Error404: React.FC = () => {
  return (
    <>
      <Slidebar />
      <ErrorContent>
        <ErrorType>404</ErrorType>
        <ErrorMess>NOT FOUND</ErrorMess>
      </ErrorContent>
    </>
  );
};

export default Error404;
