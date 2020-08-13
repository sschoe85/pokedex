import React, {useEffect} from "react";
import "./App.css";
import List from "./components/list";
import ListItem from "./components/listItem";
import ListItemIcon from "./components/listItemIcon";
import ListItemText from "./components/listItemText";
import { fetchPokemons } from "./api/fetchPokemons";



function App() {
  const [loading, setLoading] = React.useState(true);
  const [pokemons, setPokemons] = React.useState([]);
  const listItems = pokemons?.map((pokemon) =>
  <ListItem key={pokemon.id} href={pokemon.link}> 
  <ListItemIcon src={pokemon.imgSrc} alt={`Picture of +{pokemon.name}`} />
      <ListItemText primary={pokemon.name} secondary={pokemon.id} />
  </ListItem>
);
function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

useEffect(() => {
  async function fetchData() {
    await waitFor(2000);
    const allPokemons = await fetchPokemons();
    setPokemons(allPokemons);
    setLoading(false);
  }
  fetchData();
}, []);


if(!loading){
  return (
    <div className="app">
      <header className="app__header">
        Pokedex{" "}
        <input
          className="pokedex__searchBar"
          type="text"
          placeholder="Search"
        />
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

else{
  return (
    <h2>Loading...</h2>
  )
}
}

export default App;
