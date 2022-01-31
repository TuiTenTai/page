import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formContentSelector } from 'state/reducers/form';
import { changeContentValue } from 'state/action-creators/form';
import { Data } from 'state/action-types/data';
import { TextField } from 'styles/FormModal';

interface ModalTextFieldProps {
  text: string;
}

type InputType = 'name' | 'link' | 'imageUrl';

const ModalTextField: React.FC<ModalTextFieldProps> = ({ text }) => {
  const formContent = useSelector(formContentSelector);
  const inputType: InputType = text !== 'Image' ? (text.toLowerCase() as InputType) : 'imageUrl';
  const dispatch = useDispatch();

  const handleFocus = (e: React.FocusEvent): void => {
    (e.target as HTMLInputElement).select();
  };

  const handleChange = (e: React.ChangeEvent): void => {
    const inputEl = e.target as HTMLInputElement;
    const newFormContent: Data = {
      ...formContent,
      name: inputType === 'name' ? inputEl.value : formContent.name,
      link: inputType === 'link' ? inputEl.value : formContent.link,
      imageUrl: inputType === 'imageUrl' ? inputEl.value : formContent.imageUrl,
    };
    dispatch(changeContentValue(newFormContent));
  };

  return (
    <TextField
      label={text}
      placeholder={'Enter ' + text + '...'}
      variant='standard'
      onFocus={handleFocus}
      onChange={handleChange}
      defaultValue={formContent[inputType as keyof Data]}
    />
  );
};

export default ModalTextField;
