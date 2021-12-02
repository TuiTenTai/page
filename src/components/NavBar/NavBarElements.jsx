import React, { useEffect } from "react";
import CaretDownPNG from "./image/caret-down.png";
import SearchIconPNG from "./image/search-icon.png";

export function DropDown({ buttonText, children }) {
  // Show or close drop menu when click button
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropDownBtn =
        e.target.matches(".drop-down > button") ||
        e.target.matches(".drop-down img");
      if (!isDropDownBtn && e.target.closest(".drop-down") != null) return;

      let currentDropDown;
      if (isDropDownBtn) {
        currentDropDown = e.target.closest(".drop-down");
        currentDropDown.classList.toggle("active");
      }

      document.querySelectorAll(".drop-down.active").forEach((dropdown) => {
        const dropMenu = dropdown.children[1];
        dropMenu.onclick = () => {
          dropdown.classList.remove("active");
        };
        if (dropdown === currentDropDown) return;
        dropdown.classList.remove("active");
      });
    });
  }, []);

  return (
    <div className="drop-down">
      <button>
        {buttonText} <img src={CaretDownPNG} alt="" className="caret-down" />
      </button>

      <div className="drop-menu">{children}</div>
    </div>
  );
}

export function DropButton({ type, setType, status, text, setStatus }) {
  function onHandleClick() {
    setType(type);
    setStatus(status);
  }

  return <button onClick={onHandleClick}>{text}</button>;
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
    const itemNames = document.querySelectorAll(".item-name");

    itemNames.forEach((itemName) => {
      const contentItem = itemName.parentElement.parentElement;
      if (
        !itemName.innerHTML.toLowerCase().includes(inputValue) &&
        contentItem.className.includes("show")
      )
        contentItem.classList.remove("show");
      else if (
        itemName.innerHTML.toLowerCase().includes(inputValue) &&
        !contentItem.className.includes("show") &&
        (contentItem.className.includes(status) || status === "all")
      )
        contentItem.classList.add("show");
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
}

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
