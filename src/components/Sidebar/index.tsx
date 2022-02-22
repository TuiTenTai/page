import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isResponsiveSelector } from 'state/reducers/responsive';
import { Bar, BarOpenButton } from 'styles/SideBar';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import { BAR_ACTIONS } from 'utils/constant';
import BarButton from './BarButton';

const Slidebar: React.FC = () => {
  const isReponsive = useSelector(isResponsiveSelector);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  if (!isReponsive) return <></>;
  return (
    <>
      <BarOpenButton aria-label='Open slide bar' size='large' onClick={handleClick}>
        <MenuIcon fontSize='inherit' />
      </BarOpenButton>
      <Bar anchor='left' open={open} onClose={handleClick}>
        <List sx={{ width: '12rem' }}>
          {BAR_ACTIONS.map((action) => (
            <BarButton key={action.text} action={action} handleClick={handleClick} />
          ))}
        </List>
      </Bar>
    </>
  );
};

export default Slidebar;
