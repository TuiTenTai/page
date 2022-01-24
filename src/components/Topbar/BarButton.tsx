import React from 'react';
import { BarAction } from 'constant';
import { Link } from 'styles';
import Tooltip from '@mui/material/Tooltip';
import { TopButton } from 'styles/TopBar';
import Drop from './Drop';

const BarButton: React.FC<BarAction> = ({ to, icon, text }) => {
  return (
    <Tooltip
      title={text === 'Home' ? text : <Drop type={text.toLowerCase()} />}
      disableFocusListener
      arrow
    >
      <Link to={to} style={{ margin: '0.25rem' }}>
        <TopButton variant='text' size='large' startIcon={icon}>
          {text}
        </TopButton>
      </Link>
    </Tooltip>
  );
};

export default BarButton;
