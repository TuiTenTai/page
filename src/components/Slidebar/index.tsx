import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeIsResponsiveValue } from 'state/action-creators/responsive';
import { isResponsiveSelector } from 'state/reducers/responsive';
import { Bar, BarOpenButton } from 'styles/SlideBar';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import { BAR_ACTIONS } from 'constant';
import BarButton from './BarButton';

const Slidebar: React.FC = () => {
  const isReponsive = useSelector(isResponsiveSelector);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect((): void => {
    window.addEventListener('resize', () => {
      dispatch(changeIsResponsiveValue());
    });
  }, [dispatch]);

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
        <List sx={{ width: '10rem' }}>
          {BAR_ACTIONS.map((action) => (
            <BarButton key={action.text} action={action} handleClick={handleClick} />
          ))}
        </List>
      </Bar>
    </>
  );
};

export default Slidebar;
