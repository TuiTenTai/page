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
  type: 'Type' | 'Status';
  values: string[];
  defaultValue: string;
}

type Type = 'anime' | 'manga' | 'lightnovel';
type Status = 'viewing' | 'viewed' | 'later';

const ModalSelect: React.FC<ModalSelectProps> = ({ type, values, defaultValue }) => {
  const formContent = useSelector(formContentSelector);
  const selectType = type.toLowerCase();
  const dispatch = useDispatch();

  const handleChange = (e: SelectChangeEvent<unknown>): void => {
    const inputEl = e.target as HTMLInputElement;
    const newFormContent: Data = {
      ...formContent,
      type: selectType === 'type' ? (inputEl.value as Type) : formContent.type,
      status: selectType === 'status' ? (inputEl.value as Status) : formContent.status,
    };
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
