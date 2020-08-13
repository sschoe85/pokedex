import React from "react";
import "./list.css";

function List(props) {
  return <nav className="pokedex__list">{props.children}</nav>;
}

export default List;
