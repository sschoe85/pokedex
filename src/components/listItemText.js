import React from "react";
import "./listItemText.css";

function ListItemText(props) {
  return (
    <div className="pokedex__listItemText">
      <h3>{props.primary}</h3>
      <p>{props.secondary}</p>
    </div>
  );
}

export default ListItemText;
