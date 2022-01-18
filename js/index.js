import { recipes } from "./data/recipes.js";
import { dropdownUtensils } from "./dropdownUtensil.js";
import { dropdownDevices, filterDevice } from "./dropdownDevice.js";
import { dropdownIngredients } from "./dropdownIngredient.js";
import { displayRecipes } from "./interface.js";
import { filterUtensil } from "./dropdownUtensil.js";

function keyWord() {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < recipes.length; index++) {
        const lesingredients = recipes[index].ingredients;
        for (let i = 0; i < lesingredients.length; i++) {
          var ingredientRecipeExist = lesingredients[i].ingredient
            .toLowerCase()
            .indexOf(inputSearch.value.toLowerCase());
        }
        const nameRecipeExist = recipes[index].name
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());
        const descriptionRecipeExist = recipes[index].description
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());
        console.log(nameRecipeExist);
        if (
          nameRecipeExist == -1 &&
          descriptionRecipeExist == -1 &&
          ingredientRecipeExist == -1
        ) {
          document.getElementsByClassName("col-md-4")[index].style.display =
            "none";
          let containerItem = document.getElementById("container-item");
          let message = document.createElement("div");
          message.innerHTML =
            "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
          containerItem.appendChild(message);
        }
      }
    }
  });
}

function index() {
  for (let index = 0; index < recipes.length; index++) {
    // recipes est un tableau
    // recipes[i] est l'element courant du tableau
    displayRecipes(recipes[index]);
  }
  keyWord();
  //dropdown();
  dropdownDevices();
  dropdownUtensils();
  dropdownIngredients();
  filterUtensil();
  filterDevice();
}

index();
