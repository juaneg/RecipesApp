import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {

  const APP_ID = "cc17d757";
  const APP_KEY = "68e00e7788cc1a09e9306c7885aeb918	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="~/public/logo192.png" width="30" height="30" alt="logo"/>
        </a>
        <form className="form-inline" onSubmit={getSearch}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={updateSearch}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>          
      <div className="container">          
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}                
      </div>        
    </div>
  )
}

export default App;
