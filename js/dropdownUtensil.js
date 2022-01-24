import { recipes } from "./data/recipes.js";
import { getItemUtensil } from "./interface.js";
import { filterTagUtensil } from "./tags.js";
console.log(document.getElementsByClassName("listbox"));

export function getUtensils() {
  let ustensilsByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    ustensilsByRecipes.push(recipes[index].ustensils);
  }
  const allUstensils = ustensilsByRecipes.flat();
  console.log("a", [...new Set(allUstensils)]);
  return [...new Set(allUstensils)];
}

/*
function getItemUtensil(utensils) {
  let item = "";
  for (let index = 0; index < utensils.length; index++) {
    item += `<li class="listbox">${utensils[index]}</li>`;
  }
  return item;
}*/

var dropdownUtensilsIsClosed = true;

export function dropdownUtensils() {
  //m'affiche la liste de tous les ustensiles
  const dropdownUtensils = document.getElementById("listbox-nameUtensils");
  const chevron = document.getElementById("chevron3");
  const listBox = document.getElementById("listbox-utensils");
  dropdownUtensils.addEventListener("click", (e) => {
    dropdownUtensilsIsClosed = false;
    const utensils = getUtensils();
    document.getElementById("search-utensils").style.display = "block";
    document.getElementById("listbox-nameUtensils").style.display = "none";
    ///dropdownUtensils.classList.add("utensilsOpen");
    listBox.innerHTML = `<ul id="listboxUl">${getItemUtensil(utensils)}</ul>`; //new set fonctionne pas
    console.log(chevron);
    filterTagUtensil();
  });
  chevron.addEventListener("click", (e) => {
    dropdownUtensilsIsClosed = true;
    document.getElementById("search-utensils").style.display = "none";
    document.getElementById("listbox-nameUtensils").style.display = "flex";
    //dropdownUtensils.classList.remove("utensilsOpen");
    listBox.innerHTML = "";
  });
}

let inputSearchUtensils = document.getElementById("input-utensils");

export function filterUtensil() {
  // Quand je fais une recherche dans le dropdown, ça me laisse la liste correspondante
  let listBoxLi = document.getElementsByClassName("listbox");
  console.log("lp", listBoxLi);
  inputSearchUtensils.addEventListener("keyup", () => {
    if (inputSearchUtensils.value.length >= 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        if (
          !listBoxLi[index].innerHTML
            .toLowerCase()
            .includes(inputSearchUtensils.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });
}

/*export function keyWordUtensil() {
  // quand je fais une recherche dans le dropdown ça m'affiche les recettes correspondante aux ustensiles qui reste
  inputSearchUtensils.addEventListener("keyup", () => {
    if (inputSearchUtensils.value.length >= 3) {
      for (let index = 0; index < recipes.length; index++) {
        const utensils = getUtensils();

        const listUtensils = utensils[index].indexOf(inputSearchUtensils.value);
        console.log(listUtensils);
        if (listUtensils == -1) {
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
}*/
