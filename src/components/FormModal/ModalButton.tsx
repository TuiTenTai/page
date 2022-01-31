import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from 'api';
import { addNewData, updateData } from 'state/action-creators/data';
import { formContentSelector } from 'state/reducers/form';
import { Button } from 'styles/FormModal';

interface ModalButtonProps {
  bgcolor: string;
  handleClose: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ children, bgcolor, handleClose }) => {
  const formContent = useSelector(formContentSelector);
  const dispatch = useDispatch();

  const fetchAddNew = async () => {
    try {
      const requestData = { ...formContent };
      const response = await api.post(requestData);
      dispatch(addNewData(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUpdate = async () => {
    try {
      await api.put(formContent);
      dispatch(updateData(formContent));
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const type = (e.target as HTMLButtonElement).innerText;
    if (type === 'CANCEL') handleClose();
    else if (formContent.name !== '' && formContent.link !== '' && formContent.imageUrl !== '') {
      switch (type) {
        case 'ADD': {
          fetchAddNew();
          handleClose();
          break;
        }

        case 'EDIT': {
          fetchUpdate();
          handleClose();
          break;
        }

        default:
          break;
      }
    } else {
      alert('Please enter require information...');
    }
  };

  return (
    <Button bgcolor={bgcolor} variant='contained' onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ModalButton;
