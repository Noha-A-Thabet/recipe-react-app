import React, { useState, useEffect } from "react";
import './App.css';
import Recipe from './Recipe';

const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  // for fetching Data 
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data.categories);
  }

  useEffect(() => {
    fetchData()
  }, [])

  // for input
  const inputHandler = (e) => {
    setSearch(e.target.value);
  }

  // for submitting
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={submitHandler}>
        <input type="text" className="search-bar" onChange={inputHandler} />
        <button type="submit" className='search-button'>Search</button>
      </form>

      <div className="recipes">
        {recipe.filter((val) => {
          if (search === "") {
            return val
          } else if (val.strCategory.toLowerCase().includes(search.toLocaleLowerCase())) {
            return val;
          }
        }).map(item => {
          return <Recipe key={item.idCategory} category={item.strCategory} thumb={item.strCategoryThumb} description={item.strCategoryDescription} inputHandler={inputHandler} />
        })}
      </div>
    </div>
  );
}

export default App;
