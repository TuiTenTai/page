import React from "react";
import { statusList } from "constant";
import { capitalize } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "styles";

const StatusList = ({ type, handleClick }) => {
  return (
    <List>
      <Link to={`/${type}`}>
        <ListItemButton sx={{ pl: 4, height: "30px" }} onClick={handleClick}>
          <ListItemText primary="All" sx={{ textAlign: "center" }} />
        </ListItemButton>
      </Link>
      {statusList.map((status) => (
        <Link to={`/${type}/${status}`} key={status}>
          <ListItemButton sx={{ pl: 4, height: "30px" }} onClick={handleClick}>
            <ListItemText
              primary={capitalize(status)}
              sx={{ textAlign: "center" }}
            />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default StatusList;
