import { recipes } from "./data/recipes.js";
import { dropdownUtensils } from "./dropdownUtensil.js";
import { dropdownDevices } from "./dropdownDevice.js";

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

/*function dropdown(index) {
  let dropdownIngredients = document.getElementById("dropdownIngredients");
  dropdownIngredients.addEventListener("click", () => {
    document.getElementById("search-ingredients").style.display = "block";
    document.querySelector(".dropdown-listbox__name").style.display = "none";
    displayIngredients();
    const listBox = document.getElementById("listbox-ingredients");
    const ulListBox = document.createElement("ul");
    const templateListBox = `
    <li>${ingredients[index].ingredient}</li>
    `;

    listBox.appendChild(ulListBox);
    ulListBox.innerHTML = templateListBox;
    console.log();
  });
}*/
///////////////////////////////////////

/////////////////////////////////
/*function getAppliances() {
  let appliances = new Set();
  for (let index = 0; index < recipes.length; index++) {
    appliances.add(recipes[index].appliance);
  }
  return appliances;
}

function getItemAppliance(appliances) {
  let item = "";
  for (let index = 0; index < appliances.length; index++) {
    item += `<li>${appliances[index]}</li>`;
  }
  return item;
}

function dropdownDevice() {
  const dropdownDevice = document.getElementById("dropdownDevice");
  dropdownDevice.addEventListener("click", () => {
    const appliances = getAppliances();
    document.getElementById("search-device").style.display = "block";
    document.getElementById("listbox-nameDevice").style.display = "none";
    dropdownDevice.className = "deviceOpen";
    const listBox = document.getElementById("listbox-device");
    const ulListBox = document.createElement("ul");
    const templateListBox = getItemAppliance(Array.from(appliances));

    listBox.appendChild(ulListBox);
    ulListBox.innerHTML = templateListBox;
    console.log(getItemAppliance(Array.from(appliances)));
  });
}*/
///////////////////////////////////

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
}

index();
