import React from "react";
import CaretDownPNG from "./image/caret-down.png";
import SearchIconPNG from "./image/search-icon.png";

export function ToggleButton() {
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
}

export function DropButton({ type, setType, status, text, setStatus }) {
  function onHandleClick() {
    setType(type);
    setStatus(status);

    const contentDivs = document.querySelectorAll(".content-item");
    var cloneStatus;
    if (status === "all") cloneStatus = "";
    else cloneStatus = status;

    for (let i = 0; i < contentDivs.length; i++) {
      contentDivs[i].classList.remove("show");
      if (contentDivs[i].className.indexOf(cloneStatus) > -1) {
        contentDivs[i].classList.add("show");
      }
    }
  }

  return <button onClick={onHandleClick}>{text}</button>;
}

export function DropDown({ buttonText, children }) {
  return (
    <div className="drop-down">
      <button>
        {buttonText} <img src={CaretDownPNG} alt="" className="caret-down" />
      </button>

      <div className="drop-menu">{children}</div>
    </div>
  );
}

export function NavSearch({ status }) {
  const onHandleClick = () => {
    const inputForm = document.querySelector(".search-form");
    inputForm.focus();
  };

  const onHandleChange = () => {
    const inputValue = document
      .querySelector(".search-form")
      .value.toLowerCase();
    const itemName = document.querySelectorAll(".item-name");

    for (let i = 0; i < itemName.length; i++) {
      const contentItem = itemName[i].parentElement.parentElement;
      if (
        !itemName[i].innerHTML.toLowerCase().includes(inputValue) &&
        contentItem.className.includes("show")
      ) {
        contentItem.classList.remove("show");
      } else if (
        itemName[i].innerHTML.toLowerCase().includes(inputValue) &&
        !contentItem.className.includes("show") &&
        (contentItem.className.includes(status) || status === "all")
      ) {
        contentItem.classList.add("show");
      }
    }
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
}
