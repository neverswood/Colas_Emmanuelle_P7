import { recipes } from "./recipes.js";

async function searchKeyword() {
  const allRecipes = recipes[index];
  for (let i = 0; i < recipes.length; i++) {
    const containerRecipe = document.getElementById("container-recipe");
    const divRecipe = document.createElement("div");
    const templateRecipe = `
        <div class="recipe__total">
        <div class="recipe__header">
        <h3></h3>
        <span>${recipes.name}</span>
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
}

searchKeyword();

console.log(recipes);
