import React from "react";

const ToggleButton = () => {
  const onHandleClick = () => {
    const navMenu = document.querySelector(".nav-menu");
    const navSearch = document.querySelector(".nav-search");
    navMenu.classList.toggle("active");
    navSearch.classList.toggle("active");
  };

  return (
    <div className="toggle-btn" onClick={onHandleClick}>
      &#9776;
    </div>
  );
};

export default ToggleButton;
