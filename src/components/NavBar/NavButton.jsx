import React, { useEffect } from "react";
import CaretDownPNG from "./media/caret-down.png";

const DropButton = ({ type, setType, text, setStatus, status }) => {
  const onHandleClick = () => {
    setType(type);
    setStatus(status);
  };

  return <button onClick={onHandleClick}>{text}</button>;
};

const DropDown = ({ textContent, setStatus, setType }) => {
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
        {textContent.text}{" "}
        <img src={CaretDownPNG} alt="" className="caret-down" />
      </button>

      <div className="drop-menu">
        <DropButton
          type={textContent.text.toLowerCase()}
          setType={setType}
          setStatus={setStatus}
          text="All"
          status="all"
        />
        <DropButton
          type={textContent.text.toLowerCase()}
          setType={setType}
          setStatus={setStatus}
          text={textContent.viewing}
          status="viewing"
        />
        <DropButton
          type={textContent.text.toLowerCase()}
          setType={setType}
          setStatus={setStatus}
          text="Later"
          status="later"
        />
        <DropButton
          type={textContent.text.toLowerCase()}
          setType={setType}
          setStatus={setStatus}
          text={textContent.viewed}
          status="viewed"
        />
      </div>
    </div>
  );
};

export default DropDown;
