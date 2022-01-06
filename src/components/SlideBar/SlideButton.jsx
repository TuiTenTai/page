import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { Link } from "styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StatusList from "./StatusList";

const SlideButton = ({ content, handleClick }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const onHandleClick = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  return (
    <>
      {content.text === "Home" ? (
        <Link to="/">
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>{content.icon}</ListItemIcon>
            <ListItemText primary={content.text} />
          </ListItemButton>
        </Link>
      ) : (
        <>
          <ListItemButton onClick={onHandleClick}>
            <ListItemIcon>{content.icon}</ListItemIcon>
            <ListItemText primary={content.text} />
            {isCollapseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isCollapseOpen} timeout="auto" unmountOnExit>
            <StatusList
              type={content.text.toLowerCase()}
              handleClick={handleClick}
            />
          </Collapse>
        </>
      )}
      <Divider />
    </>
  );
};

export default SlideButton;
