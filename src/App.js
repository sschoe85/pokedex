import React, { useEffect } from "react";
import "./App.css";
import List from "./components/list";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/listItemIcon";
import ListItemText from "./components/listItemText";
import { fetchPokemons } from "./api/fetchPokemons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokemon from "./pages/Pokemon";


function App() {
  const [loading, setLoading] = React.useState(true);
  const [pokemons, setPokemons] = React.useState([]);
  const listItems = pokemons?.map((pokemon) => (
    <ListItem key={pokemon.id} href={`pokemon/${pokemon.name.toLowerCase()}`}>
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

  if (!loading) {
    return (
      <Router>
      <div className="app">
        <Switch>
          <Route path="/main">
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
        </Route>
        </Switch>
        <Switch>
          <Route path ="/pokemon/:name">
            <Pokemon/>
          </Route>
        </Switch>

        <footer className="app__footer">
          <li><Link to ="/main">Home</Link></li>
          <li><Link to = "/pokemon">Pokemon Details</Link></li></footer>
      </div>
      </Router>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default App;
