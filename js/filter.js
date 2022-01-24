import { recipes } from "./data/recipes.js";
import { getUtensils } from "./dropdownUtensil.js";

//// filtre avec barre de recherche
console.log(document.getElementsByClassName("listbox"));

export function keyWord() {
  let inputSearch = document.getElementById("searchbar");
  let listBoxLi = document.getElementsByClassName("listbox");

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
        console.log("index", nameRecipeExist.value);
        for (let li = 0; li < listBoxLi.length; li++) {
          console.log("dorloti");
        }
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

export function filtersearch() {
  let inputSearch = document.getElementById("searchbar");
  console.log("re", document.getElementsByClassName("listbox"));
  inputSearch.addEventListener("keydown", () => {
    console.log(document.getElementsByClassName("listbox"));

    /*if (inputSearch.value.length >= 3) {
      if (nameRecipeExist < 0 && descriptionRecipeExist < 0 &&
        ingredientRecipeExist < 0) {
        //filtre les dropdown
      }
      for (let index = 0; index < listBoxLi.length; index++) {
        if (
          !listBoxLi[index].includes(nameRecipeExist.value) && !listBoxLi[index].includes(desciptionRecipeExist.value) && !listBoxLi[index].includes(ingredientRecipeExist.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }*/
  });
}

//si des mots de la liste ne figure pas dans les recettes on les enleve
