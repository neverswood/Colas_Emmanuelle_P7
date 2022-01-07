import { recipes } from "./data/recipes.js";

function displayIngredients(ingredients) {
  let item = "";
  for (let index = 0; index < ingredients.length; index++) {
    item += `<li>${ingredients[index].ingredient}
    <span>${ingredients[index].quantity} ${ingredients[index].unit}</span></li>`;
  }
  return item;
}

function displayRecipes(recipe) {
  const containerRecipe = document.getElementById("container-recipe");
  const divRecipe = document.createElement("div");
  const templateRecipe = `
        <div class="recipe__total">
        <div class="recipe__header">
        <h3></h3>
        <span>${recipe.name}</span>
        </div>
        <div>
        <div class="recipe__ingrédients">
        <p>ingredient: </p>
        <span>quantity unit</span>
        </div>
        <div class="recipe__explanations"></div>
        </div>
        </div>
        `;
  containerRecipe.appendChild(divRecipe);
  divRecipe.innerHTML = templateRecipe;
  console.log(allRecipes);
}

/*const searchbar = document.getElementById("searchbar");
  if (searchbar.value.length < 3) {
  }*/

console.log(recipes);
