import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formContentSelector } from 'state/reducers/form';
import { changeContentValue } from 'state/action-creators/form';
import { Data } from 'state/action-types/data';
import { TextField } from 'styles/FormModal';

interface ModalTextFieldProps {
  text: string;
}

const ModalTextField: React.FC<ModalTextFieldProps> = ({ text }) => {
  const formContent = useSelector(formContentSelector);
  const typeInput = text !== 'Image' ? text.toLowerCase() : 'img';
  const dispatch = useDispatch();

  const handleFocus = (e: React.FocusEvent): void => {
    (e.target as HTMLInputElement).select();
  };

  const handleChange = (e: React.ChangeEvent): void => {
    const newFormContent = { ...formContent };
    newFormContent[typeInput as keyof Data] = (e.target as HTMLInputElement).value;
    dispatch(changeContentValue(newFormContent));
  };

  return (
    <TextField
      label={text}
      placeholder={'Enter ' + text + '...'}
      variant='standard'
      onFocus={handleFocus}
      onChange={handleChange}
      defaultValue={formContent[typeInput as keyof Data]}
    />
  );
};

export default ModalTextField;
