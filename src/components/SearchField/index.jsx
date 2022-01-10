import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "reducers/search";
import { searchChange } from "actions/search";
import { Search } from "styles/Search";

const SearchField = ({ fullWidth = false, style }) => {
  const search = useSelector(searchSelector);
  const dispatch = useDispatch();

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(searchChange(value));
  };

  return (
    <Search
      type="search"
      size="small"
      variant="outlined"
      placeholder="Search..."
      defaultValue={search}
      fullWidth={fullWidth}
      onChange={handleChange}
      onFocus={handleFocus}
      sx={!fullWidth ? { width: "20rem" } : { width: "100%" }}
      style={style}
    />
  );
};

export default SearchField;
