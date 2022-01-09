import React from "react";
import { useSelector } from "react-redux";
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

const Breadcrumbs = ({ type, status }) => {
  const isResponsive = useSelector(isResponsiveSelector);

  const upCaseType = capitalize(type);
  const upCaseStatus = capitalize(status);
  const path = "/" + type + "/" + status;

  return (
    <AppBar>
      <Toolbar sx={styleToolBar}>
        <MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link style={styleLink} to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link style={styleLink} to={`/${type}`}>
            {upCaseType}
          </Link>
          {upCaseStatus !== "All" && <Link to={path}>{upCaseStatus}</Link>}
        </MuiBreadcrumbs>
        {!isResponsive && <SearchField />}
        <SlideBar />
      </Toolbar>
    </AppBar>
  );
};

export default Breadcrumbs;
