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
        <h3>${recipe.name}</h3>
        <span><i class="far fa-clock"></i> ${recipe.time}</span>
        </div>
        <div>
        <div class="recipe__ingrédients">
        ${displayIngredients(recipe.ingredients)}
        </div>
        <div class="recipe__explanations">
        ${recipe.description}</div>
        </div>
        </div>
        `;
  containerRecipe.appendChild(divRecipe);
  divRecipe.innerHTML = templateRecipe;
}

function index() {
  for (let index = 0; index < recipes.length; index++) {
    // recipes est un tableau
    // recipes[i] est l'element courant du tableau
    displayRecipes(recipes[index]);
  }
}

index();

/*const searchbar = document.getElementById("searchbar");
  if (searchbar.value.length < 3) {
  }*/

console.log(recipes);
