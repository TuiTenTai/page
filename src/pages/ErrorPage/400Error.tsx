import React from 'react';
import Slidebar from 'components/Slidebar';
import { ErrorContent, ErrorMess, ErrorType } from 'styles/ErrorPage';

const Error400: React.FC = () => {
  return (
    <>
      <Slidebar />
      <ErrorContent>
        <ErrorType>400</ErrorType>
        <ErrorMess>BAD REQUEST</ErrorMess>
      </ErrorContent>
    </>
  );
};

export default Error400;
