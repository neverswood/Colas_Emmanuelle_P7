import { recipes } from "./data/recipes.js";

function getUtensils() {
  let ustensilsByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    ustensilsByRecipes.push(recipes[index].ustensils);
  }
  const allUstensils = ustensilsByRecipes.flat();

  return new Set(allUstensils);
}

function getItemUtensil(utensils) {
  let item = "";
  for (let index = 0; index < utensils.length; index++) {
    item += `<li class="listbox">${utensils[index]}</li>`;
  }
  return item;
}

var dropdownUtensilsIsClosed = true;

export function dropdownUtensils() {
  const dropdownUtensils = document.getElementById("listbox-nameUtensils");
  const chevron = document.getElementById("chevron3");
  const listBox = document.getElementById("listbox-utensils");
  dropdownUtensils.addEventListener("click", (e) => {
    dropdownUtensilsIsClosed = false;
    const utensils = [...new Set(getUtensils())];
    document.getElementById("search-utensils").style.display = "block";
    document.getElementById("listbox-nameUtensils").style.display = "none";
    ///dropdownUtensils.classList.add("utensilsOpen");
    listBox.innerHTML = `<ul>${getItemUtensil(utensils)}</ul>`;
    console.log(chevron);
  });
  chevron.addEventListener("click", (e) => {
    dropdownUtensilsIsClosed = true;
    document.getElementById("search-utensils").style.display = "none";
    document.getElementById("listbox-nameUtensils").style.display = "flex";
    //dropdownUtensils.classList.remove("utensilsOpen");
    listBox.innerHTML = "";
  });
}

export function filterUtensil() {
  let inputSearch = document.getElementById("input-utensils");
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < recipes.length; index++) {
        const utensilRecipeExist = recipes[index].ustensils.indexOf(
          inputSearch.value.toLowerCase()
        );
        if (utensilRecipeExist == -1) {
          document.querySelector(".listbox").style.display = "none";
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
