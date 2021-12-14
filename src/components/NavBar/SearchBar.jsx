import React from "react";
import SearchIconPNG from "./media/search-icon.png";

const SearchBar = ({ status, setSearchInput }) => {
  const onHandleClick = () => {
    const inputForm = document.querySelector(".search-form");
    inputForm.focus();
  };

  const onHandleChange = () => {
    const inputValue = document
      .querySelector(".search-form")
      .value.toLowerCase();
    setSearchInput(inputValue);
  };

  return (
    <div className="nav-search" onClick={onHandleClick}>
      <img src={SearchIconPNG} alt="" className="search-icon" />
      <input
        type="search"
        className="search-form"
        placeholder="Search..."
        onChange={onHandleChange}
      />
    </div>
  );
};

export default SearchBar;
