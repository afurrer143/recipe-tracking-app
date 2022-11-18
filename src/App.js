import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"


function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // delete recipe called in recipeList.js
  const deleteRecipe = (recipeIndex) => {
    console.log("recipe on delete recipe is", recipeIndex)
    setRecipes((currentRecipe) => 
    currentRecipe.filter((rec, index) => index !== recipeIndex)
  );
  }

  // add recipe is called on submit button clicked, with the newly made recipe data. It addes it to recipe. (which again has default value in recipe data)
  // add recipe called in recipeCreate.js
  const addRecipes = (newRecipe) => {
    setRecipes((currentRecipe) => [
      ...currentRecipe,
      newRecipe,
    ])
  }
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipeButton={deleteRecipe}/>
      <RecipeCreate recipes={recipes} addRecipes={addRecipes} />
    </div>
  );
}

export default App;
