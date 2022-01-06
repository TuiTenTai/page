import React from "react";
import { Link } from "styles";
import { TopButton, DropMenu } from "styles/TopBar";
import DropContainer from "./DropContainer";

const NavButton = ({ to, icon, text }) => {
  return (
    <DropMenu
      title={
        text === "Home" ? text : <DropContainer type={text.toLowerCase()} />
      }
      disableFocusListener
      arrow
    >
      <Link to={to} style={{ margin: "0.25rem" }}>
        <TopButton variant="text" size="large" component="div" startIcon={icon}>
          {text}
        </TopButton>
      </Link>
    </DropMenu>
  );
};

export default NavButton;
