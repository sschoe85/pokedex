import React, {useEffect} from "react";
import List from "../components/list";
import ListItem from "../components/ListItem";
import ListItemIcon from "../components/listItemIcon";
import ListItemText from "../components/listItemText";
import { fetchPokemons } from "../api/fetchPokemons";

function Pokemons() {
    const [loading, setLoading] = React.useState(true);
      const [pokemons, setPokemons] = React.useState([]);
      useEffect(() => {
        async function fetchData() {
          const allPokemons = await fetchPokemons();
          setPokemons(allPokemons);
          setLoading(false);
        }
        fetchData();
      }, []);
    const listItems = pokemons?.map((pokemon) => (
        <ListItem key={pokemon.id} href={pokemon.link}>
          <ListItemIcon src={pokemon.imgSrc} alt={`Picture of +{pokemon.name}`} />
          <ListItemText primary={pokemon.name} secondary={pokemon.id} />
        </ListItem>
      ));
      
  useEffect(() => {
    async function fetchData() {
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setLoading(false);
    }
    fetchData();
  }, []);
      
  return <div>
      <header className="app__header">
          Pokedex{" "}
          <input
            className="pokedex__searchBar"
            type="text"
            placeholder="Search"
          />
        </header>
        <main className="pokedex__main">
          <List>{listItems}</List>
        </main>
  </div>;
}

export default Pokemons;