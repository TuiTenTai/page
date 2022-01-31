import React from 'react';
import Sidebar from 'components/Sidebar';
import { ErrorContent, ErrorMess, ErrorType } from 'styles/ErrorPage';

const Error404: React.FC = () => {
  return (
    <>
      <Sidebar />
      <ErrorContent>
        <ErrorType>404</ErrorType>
        <ErrorMess>NOT FOUND</ErrorMess>
      </ErrorContent>
    </>
  );
};

export default Error404;
