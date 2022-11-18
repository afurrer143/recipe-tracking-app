import React from "react";


// recipes called from app.js property. And they use the initial state of RecipeData.js
function RecipeList({recipes, deleteRecipeButton}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // small helper function so if photo is left blank, it will just be an empty table
  const CheckPhoto = ({currentRecipe}) => {
    // console.log("CURRENT RECIPE PHOTO IS~~~~~~~~~",currentRecipe.photo);
    
    if (currentRecipe.photo === "") { 
      return <p></p>
    } else {
      return <img src={currentRecipe.photo} alt="Example of food"/>
    }
  }


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th><h2>Name </h2></th>
            <th><h2>Cusine</h2></th>
            <th><h2>Photo</h2></th>
            <th><h2>Ingredients</h2></th>
            <th><h2>Preparation</h2></th>
            <th><h2>Actions</h2></th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((currentRecipe, index) => {
            console.log("Current Recipe from RecipeList.js is:", currentRecipe);
            return (
              <tr key={index}>
                <td >{currentRecipe.name} </td>
                <td>{currentRecipe.cuisine} </td>   
                <td><CheckPhoto currentRecipe={currentRecipe} /></td>
                <td>{currentRecipe.ingredients} </td>
                <td className="content_td">{currentRecipe.preparation} </td>
                <td> <button name="delete" onClick={() => deleteRecipeButton(index)}>Delete</button> </td>
              </tr>)
            
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
