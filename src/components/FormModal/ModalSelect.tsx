import React from 'react';
import { capitalize, SelectChangeEvent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { formContentSelector } from 'state/reducers/form';
import { changeContentValue } from 'state/action-creators/form';
import { Data } from 'state/action-types/data';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Select } from 'styles/FormModal';

interface ModalSelectProps {
  type: string;
  values: string[];
  defaultValue: string;
}

const ModalSelect: React.FC<ModalSelectProps> = ({ type, values, defaultValue }) => {
  const formContent = useSelector(formContentSelector);
  const dispatch = useDispatch();

  const handleChange = (e: SelectChangeEvent<unknown>): void => {
    const newFormContent = { ...formContent };
    newFormContent[type.toLowerCase() as keyof Data] = (e.target as HTMLInputElement).value;
    dispatch(changeContentValue(newFormContent));
  };

  return (
    <FormControl variant='standard' fullWidth>
      <InputLabel sx={{ color: 'white' }}>{type}</InputLabel>
      <Select label={type} onChange={handleChange} defaultValue={defaultValue}>
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {capitalize(value)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ModalSelect;
