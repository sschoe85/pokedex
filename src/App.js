import React, {useState} from "react";
import "./App.css";
import List from "./components/list";
import ListItem from "./components/listItem";
import ListItemIcon from "./components/listItemIcon";
import ListItemText from "./components/listItemText";
import BulbasaurSrc from "./assets/bulbasaur.png";

const bulbasaur = {
  name: "Bulbasaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  id: "001",
  link: "#bulbasaur",
};
const ivysaur = {
  name: "Ivysaur",
  imgSrc: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  id: "002",
  link: "#ivysaur",
};

const allPokemons = [bulbasaur, ivysaur];




function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const listItems = pokemons.map((pokemon) =>
  <ListItem key={pokemon.id} href={pokemon.link}> 
  <ListItemIcon src={pokemon.imgSrc} alt={`Picture of +{pokemon.name}`} />
      <ListItemText primary={pokemon.name} secondary={pokemon.id} />
  </ListItem>
);


function handleClick(){
 setPokemons(allPokemons);
  
}
  return (
    <div className="app">
      <header className="app__header">
        Pokedex{" "}
        <input
          className="pokedex__searchBar"
          type="text"
          placeholder="Search"
        />
        <button onClick={() => handleClick()}>
        Click me
      </button>
      </header>
      <main className="pokedex__main">
  <List>

    {listItems}
  </List>
</main>
      
      <footer className="app__footer">Navigation</footer>
    </div>
  );
}

export default App;
