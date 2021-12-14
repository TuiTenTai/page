import React from "react";
import DropDown from "./NavButton";
import SearchBar from "./SearchBar";
import ToggleButton from "./ToggleButton";
import "./index.css";

const animeTextContent = {
  text: "Anime",
  viewing: "Watching",
  viewed: "Watched",
};

const mangaTextContent = {
  text: "Manga",
  viewing: "Reading",
  viewed: "Read",
};

const novelTextContent = {
  text: "Novel",
  viewing: "Reading",
  viewed: "Read",
};

const NavBar = ({ setType, status, setStatus, setSearchInput }) => {
  return (
    <div className="nav-bar">
      <div className="brand-title">My AMN List</div>
      <div className="nav-menu">
        <DropDown
          textContent={animeTextContent}
          setType={setType}
          setStatus={setStatus}
        />
        <DropDown
          textContent={mangaTextContent}
          setType={setType}
          setStatus={setStatus}
        />
        <DropDown
          textContent={novelTextContent}
          setType={setType}
          setStatus={setStatus}
        />
      </div>
      <SearchBar
        status={status}
        setType={setType}
        setStatus={setStatus}
        setSearchInput={setSearchInput}
      />
      <ToggleButton />
    </div>
  );
};

export default NavBar;
