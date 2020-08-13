import React from "react";
import "./listItem.css";

function ListItem(props) {
  return (
    <a className="pokedex__listItem" href={props.href}>
      {props.children}
    </a>
  );
}

export default ListItem;
