import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchChangeValue, searchResetValue } from 'state/action-creators/search';
import { searchSelector } from 'state/reducers/search';
import { Search } from 'styles/Search';

interface SearchFieldProps {
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

const SearchField: React.FC<SearchFieldProps> = ({ fullWidth, style }) => {
  const search = useSelector(searchSelector);
  const searchDivRef = createRef<HTMLDivElement>();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect((): void => {
    if (searchDivRef.current?.firstChild) {
      (searchDivRef.current.firstChild.firstChild as HTMLInputElement).value = '';
      dispatch(searchResetValue());
    }
  }, [pathname]); // eslint-disable-line

  const handleFocus = (e: React.FocusEvent): void => {
    (e.target as HTMLInputElement).select();
  };

  const handleChange = (e: React.ChangeEvent): void => {
    const value = (e.target as HTMLInputElement).value.toLowerCase();
    dispatch(searchChangeValue(value));
  };

  return (
    <Search
      ref={searchDivRef}
      type='search'
      size='small'
      variant='outlined'
      placeholder='Search...'
      defaultValue={search}
      fullWidth={fullWidth}
      onChange={handleChange}
      onFocus={handleFocus}
      sx={!fullWidth ? { width: '20rem' } : { width: '100%' }}
      style={style}
    />
  );
};

SearchField.defaultProps = {
  fullWidth: false,
  style: {},
};

export default SearchField;
