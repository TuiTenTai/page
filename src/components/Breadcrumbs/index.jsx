import React from "react";
import { useSelector } from "react-redux";
import { typeSelector, statusSelector } from "reducers/filter";
import { isResponsiveSelector } from "reducers/responsive";
import { capitalize } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AppBar, Link } from "styles";
import SlideBar from "components/SlideBar";
import SearchField from "components/SearchField";

const styleLink = {
  display: "flex",
  alignItems: "center",
};

const styleToolBar = {
  margin: "0.25rem",
  display: "flex",
  justifyContent: "space-between",
};

const Breadcrumbs = () => {
  const typeState = useSelector(typeSelector);
  const statusState = useSelector(statusSelector);
  const isResponsiveState = useSelector(isResponsiveSelector);

  const upCaseType = capitalize(typeState);
  const upCaseStatus = capitalize(statusState);
  const path = "/" + typeState + "/" + statusState;

  return (
    <AppBar>
      <Toolbar sx={styleToolBar}>
        <MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link style={styleLink} to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link style={styleLink} to={`/${typeState}`}>
            {upCaseType}
          </Link>
          {upCaseStatus !== "All" && <Link to={path}>{upCaseStatus}</Link>}
        </MuiBreadcrumbs>
        {!isResponsiveState && <SearchField />}
        <SlideBar />
      </Toolbar>
    </AppBar>
  );
};

export default Breadcrumbs;
