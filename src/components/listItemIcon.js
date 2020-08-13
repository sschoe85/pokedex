import React from "react";
import "./listItemIcon.css";

function ListItemIcon(props) {
  return <img className="pokedex__img" src={props.src} alt={props.alt} />;
}

export default ListItemIcon;
