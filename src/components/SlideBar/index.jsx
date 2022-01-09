import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isResponsiveSelector } from "reducers/responsive";
import { changeIsResponsiveValue } from "actions/responsive";
import { barAction } from "constant";
import { Bar, BarOpenButton } from "styles/SlideBar";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import SlideButton from "./SlideButton";

const SlideBar = () => {
  const isResponsive = useSelector(isResponsiveSelector);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // Set isResponsive state
  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(changeIsResponsiveValue());
    });
  }, [dispatch]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isResponsive && (
        <>
          <BarOpenButton size="large" onClick={handleClick}>
            <MenuIcon fontSize="inherit" />
          </BarOpenButton>
          <Bar anchor="left" open={isOpen} onClose={handleClick}>
            <List sx={{ width: "10rem" }}>
              {barAction.map((item) => (
                <SlideButton
                  key={item.text}
                  content={item}
                  handleClick={handleClick}
                />
              ))}
            </List>
          </Bar>
        </>
      )}
    </>
  );
};

export default SlideBar;
