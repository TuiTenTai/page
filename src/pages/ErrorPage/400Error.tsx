import React from 'react';
import Sidebar from 'components/Sidebar';
import { ErrorContent, ErrorMess, ErrorType } from 'styles/ErrorPage';

const Error400: React.FC = () => {
  return (
    <>
      <Sidebar />
      <ErrorContent>
        <ErrorType>400</ErrorType>
        <ErrorMess>BAD REQUEST</ErrorMess>
      </ErrorContent>
    </>
  );
};

export default Error400;
