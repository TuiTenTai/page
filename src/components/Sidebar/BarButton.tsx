import React, { useState } from 'react';
import { BarAction } from 'utils/constant';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { Link } from 'styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ButtonList from './ButtonList';

interface BarButtonProps {
  action: BarAction;
  handleClick: () => void;
}

const BarButton: React.FC<BarButtonProps> = ({ action, handleClick }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);

  const onHandleClick = (): void => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  return (
    <>
      {action.text === 'Home' ? (
        <Link to='/'>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>{action.icon}</ListItemIcon>
            <ListItemText primary={action.text} />
          </ListItemButton>
        </Link>
      ) : (
        <>
          <ListItemButton onClick={onHandleClick}>
            <ListItemIcon>{action.icon}</ListItemIcon>
            <ListItemText primary={action.text} />
            {isCollapseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isCollapseOpen} timeout='auto' unmountOnExit>
            <ButtonList type={action.text.toLowerCase()} handleClick={handleClick} />
          </Collapse>
        </>
      )}
      <Divider />
    </>
  );
};

export default BarButton;
