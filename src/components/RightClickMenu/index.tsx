import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from 'api';
import { changeFormType, reverseIsShowValue } from 'state/action-creators/form';
import { formContentSelector } from 'state/reducers/form';
import { deleteData } from 'state/action-creators/data';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

interface RightClickMenuProps {
  x: number;
  y: number;
  show: boolean;
}

const RightClickMenu: React.FC<RightClickMenuProps> = ({ x, y, show }) => {
  const formContent = useSelector(formContentSelector);
  const dispatch = useDispatch();

  const handleEditClick = (): void => {
    dispatch(changeFormType('edit'));
    dispatch(reverseIsShowValue());
  };

  const handleDelete = async () => {
    try {
      await api.delete(formContent._id);
      dispatch(deleteData(formContent._id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!show) return <></>;
  return (
    <Paper
      sx={{
        width: '100px',
        position: 'fixed',
        top: y,
        left: x,
      }}
    >
      <MenuList>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </MenuList>
    </Paper>
  );
};

export default RightClickMenu;
