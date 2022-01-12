import { recipes } from "./data/recipes.js";

function displayIngredients(ingredients) {
  let item = "";
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
  containerDiv.setAttribute("class", "col-md-4");
  const templateRecipe = `
        <div class="container-item__recipe" id="${recipe.id}">
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
        if (nameRecipeExist == -1 && descriptionRecipeExist == -1) {
          document.getElementsByClassName("col-md-4")[index].style.display =
            "none";
          let containerItem = document.getElementById("container-item");
          let message = document.createElement("div");
          message.innerHTML =
            "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
          containerItem.appendChild(message);
        }
        console.log(nameRecipeExist.length);
        //else if (nameRecipeExist.length == -1) {// rien ne correspond, creer div et écris blabla
        // console.log("lol");
        ///}
      }
      /*console.log(ingredients.length);
      for (let index = 0; index < ingredients.length; index++) {
        const ingredientRecipeExist = ingredients[index].ingredient;
        console.log("ingrdient");
      }*/
    }
  });
  console.log(inputSearch);
}
console.log(document.getElementsByClassName("container-item__recipe"));

function dropdown() {
  let dropdownIngredients = document.getElementById("dropdownIngredients");
  dropdownIngredients.addEventListener("click", () => {
    document.getElementById("search-ingredients").style.display = "block";
    document.querySelector(".dropdown-listbox__name").style.display = "none";
    displayIngredients();
    const listbox = document.getElementById("listbox-ingredients");
    const ulListbox = document.createElement("ul");
    ulListbox.innerHTML = displayIngredients(ingredients);
  });
}

function index() {
  for (let index = 0; index < recipes.length; index++) {
    // recipes est un tableau
    // recipes[i] est l'element courant du tableau
    displayRecipes(recipes[index]);
  }
  keyWord();
  dropdown();
}

index();
