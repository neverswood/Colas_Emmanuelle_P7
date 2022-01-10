import { recipes } from "./data/recipes.js";

function displayIngredients(ingredients) {
  let item = ""; // si unit est vide rien mettre
  for (let index = 0; index < ingredients.length; index++) {
    item += `<li>${ingredients[index].ingredient}: 
    <span>${ingredients[index].quantity ?? ""} ${
      ingredients[index].unit ?? ""
    }</span></li>`;
  }
  return item;
}
//}

function displayRecipes(recipe) {
  const containerRecipe = document.getElementById("container-item");
  const containerDiv = document.createElement("div");
  const templateRecipe = `
        <div class="col container-item__recipe" id="${recipe.id}">
        <div class="divEmpty"></div>
        <div class="recipe">
        <div class="recipe__header">
        <h3>${recipe.name}</h3>
        <span><i class="far fa-clock"></i> ${recipe.time} min</span>
        </div>
        <div class="recipe__explanation">
        <div class="recipe__ingrédients">
        ${displayIngredients(recipe.ingredients)}
        </div>
        <div class="recipe__description">
        ${recipe.description}...</div>
        </div>
        </div>
        </div>
        `;
  containerRecipe.appendChild(containerDiv);
  containerDiv.innerHTML = templateRecipe;
}

function keyWord(ingredients) {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    console.log(inputSearch.value);
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < recipes.length; index++) {
        const nameRecipeExist = recipes[index].name
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());
        const descriptionRecipeExist = recipes[index].description
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());
        //for (let index = 0; index < ingredients.length; index++) {
        //console.log("ing", recipes[index].ingredients[index].ingredient);
        //}
        /*const ingredientRecipeExist = recipes[index].ingredients[
          index
        ].ingredient
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());*/
        if (nameRecipeExist == -1 && descriptionRecipeExist == -1) {
          document.getElementsByClassName("container-item__recipe")[
            index
          ].style.display = "none";
        }
      }
    }
  });
  console.log(inputSearch);
}
console.log(document.getElementsByClassName("container-item__recipe"));

function index() {
  for (let index = 0; index < recipes.length; index++) {
    // recipes est un tableau
    // recipes[i] est l'element courant du tableau
    displayRecipes(recipes[index]);
  }
  keyWord();
}

index();

console.log(recipes);
