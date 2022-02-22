import React from 'react';
import { STATUS_LIST } from 'utils/constant';
import { capitalize } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'styles';

interface ButtonListProps {
  type: string;
  handleClick: () => void;
}

const ButtonList: React.FC<ButtonListProps> = ({ type, handleClick }) => {
  return (
    <List>
      <Link to={`/${type}`}>
        <ListItemButton sx={{ pl: 4, height: '30px' }} onClick={handleClick}>
          <ListItemText primary='All' sx={{ textAlign: 'center' }} />
        </ListItemButton>
      </Link>
      {STATUS_LIST.map((status) => (
        <Link to={`/${type}/${status}`} key={status}>
          <ListItemButton sx={{ pl: 4, height: '30px' }} onClick={handleClick}>
            <ListItemText primary={capitalize(status)} sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default ButtonList;
