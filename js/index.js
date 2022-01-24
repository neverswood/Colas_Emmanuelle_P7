import { recipes } from "./data/recipes.js";
import { dropdownUtensils, filterTagUtensil } from "./dropdownUtensil.js";
import { dropdownDevices, filterDevice } from "./dropdownDevice.js";
import { dropdownIngredients, filterIngredient } from "./dropdownIngredient.js";
import { displayRecipes } from "./interface.js";
import { filterUtensil } from "./dropdownUtensil.js";
import { filtersearch } from "./filter.js";
import { keyWord } from "./filter.js";
//import { keyWordUtensil } from "./dropdownUtensil.js";

function index() {
  for (let index = 0; index < recipes.length; index++) {
    // recipes est un tableau
    // recipes[i] est l'element courant du tableau
    displayRecipes(recipes[index]);
  }
  keyWord();
  //dropdown();
  filtersearch();
  dropdownDevices();
  dropdownUtensils();
  dropdownIngredients();
  filterUtensil();
  filterDevice();
  filterIngredient();
  //keyWordUtensil();
}

index();
