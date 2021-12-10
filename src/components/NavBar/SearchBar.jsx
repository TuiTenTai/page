import React from "react";
import SearchIconPNG from "./image/search-icon.png";

const SearchBar = ({ status }) => {
  const onHandleClick = () => {
    const inputForm = document.querySelector(".search-form");
    inputForm.focus();
  };

  const onHandleChange = () => {
    const inputValue = document
      .querySelector(".search-form")
      .value.toLowerCase();
    const cardNames = document.querySelectorAll(".card-name");

    cardNames.forEach((cardName) => {
      const cardContainer = cardName.parentElement.parentElement;
      if (
        !cardName.innerHTML.toLowerCase().includes(inputValue) &&
        cardContainer.className.includes("show")
      )
        cardContainer.classList.remove("show");
      else if (
        cardName.innerHTML.toLowerCase().includes(inputValue) &&
        !cardContainer.className.includes("show") &&
        (cardContainer.className.includes(status) || status === "all")
      )
        cardContainer.classList.add("show");
    });
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
