import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchSelector } from "reducers/search";
import { searchChangeValue, resetSearchValue } from "actions/search";
import { Search } from "styles/Search";

const SearchField = ({ fullWidth = false, style }) => {
  const search = useSelector(searchSelector);
  const searchRef = createRef();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current.firstChild.firstChild.value = "";
    dispatch(resetSearchValue());
  }, [pathname]); // eslint-disable-line

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(searchChangeValue(value));
  };

  return (
    <Search
      ref={searchRef}
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
