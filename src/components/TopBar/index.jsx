import React from "react";
import NavButton from "./NavButton";
import { useSelector } from "react-redux";
import { isResponsiveSelector } from "reducers/responsive";
import { AppBar } from "styles";
import { barAction } from "constant";
import { TopBarContainer, ButtonGroup } from "styles/TopBar";

const TopBar = () => {
  const isResponsive = useSelector(isResponsiveSelector);

  return (
    <>
      {!isResponsive && (
        <AppBar sx={{ zIndex: 2 }}>
          <TopBarContainer>
            <ButtonGroup>
              {barAction.map((item) => (
                <NavButton
                  key={item.text}
                  to={item.to}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </ButtonGroup>
          </TopBarContainer>
        </AppBar>
      )}
    </>
  );
};

export default TopBar;
