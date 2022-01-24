import React from 'react';
import { useDispatch } from 'react-redux';
import { Fab } from 'styles/AddNewAction';
import AddIcon from '@mui/icons-material/Add';
import { changeFormType, resetContentValue, reverseIsShowValue } from 'state/action-creators/form';

const AddNewAction: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(reverseIsShowValue());
    dispatch(changeFormType('add'));
    dispatch(resetContentValue());
  };

  return (
    <Fab aria-label='Add new button' bgcolor='#c41b1b' onClick={handleClick}>
      <AddIcon />
    </Fab>
  );
};

export default AddNewAction;
