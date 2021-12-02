import React from "react";
import {
  DropDown,
  DropButton,
  NavSearch,
  ToggleButton,
} from "./NavBarElements";
import "./index.css";

function NavBar({ setType, status, setStatus }) {
  return (
    <div className="nav-bar">
      <div className="brand-title">My AMN List</div>
      <div className="nav-menu">
        <DropDown buttonText="Anime">
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="anime"
            status="all"
            text="All"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="anime"
            status="viewing"
            text="Watching"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="anime"
            status="later"
            text="Later"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="anime"
            status="viewed"
            text="Watched"
          />
        </DropDown>
        <DropDown buttonText="Manga">
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="manga"
            status="all"
            text="All"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="manga"
            status="viewing"
            text="Reading"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="manga"
            status="later"
            text="Later"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="manga"
            status="viewed"
            text="Read"
          />
        </DropDown>
        <DropDown buttonText="Novel">
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="novel"
            status="all"
            text="All"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="novel"
            status="viewing"
            text="Reading"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="novel"
            status="later"
            text="Later"
          />
          <DropButton
            setStatus={setStatus}
            setType={setType}
            type="novel"
            status="viewed"
            text="Read"
          />
        </DropDown>
      </div>
      <NavSearch status={status} />
      <ToggleButton />
    </div>
  );
}

export default NavBar;
