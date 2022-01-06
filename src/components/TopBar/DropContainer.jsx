import React from "react";
import { capitalize } from "@mui/material";
import { statusList } from "constant";
import { DropBox, DropButton, DropLink } from "styles/TopBar";

const DropItem = ({ type, status }) => {
  const text = capitalize(status);
  const path = "/" + type + "/" + status;

  return (
    <DropLink to={path}>
      <DropButton>{text}</DropButton>
    </DropLink>
  );
};

const DropContainer = ({ type }) => {
  return (
    <DropBox>
      {statusList.map((status) => (
        <DropItem type={type} status={status} key={status} />
      ))}
    </DropBox>
  );
};

export default DropContainer;
