import React from 'react';
import { capitalize } from '@mui/material';
import { statusList } from 'constant';
import { DropBox, DropButton, DropLink } from 'styles/TopBar';

interface DropItemProps {
  type: string;
  status: string;
}

const DropItem: React.FC<DropItemProps> = ({ type, status }) => {
  const text = capitalize(status);
  const path = '/' + type + '/' + status;

  return (
    <DropLink to={path}>
      <DropButton>{text}</DropButton>
    </DropLink>
  );
};

interface DropProps {
  type: string;
}

const Drop: React.FC<DropProps> = ({ type }) => {
  return (
    <DropBox>
      {statusList.map((status) => (
        <DropItem type={type} status={status} key={status} />
      ))}
    </DropBox>
  );
};

export default Drop;
