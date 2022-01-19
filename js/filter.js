import { recipes } from "./data/recipes.js";

//// filtre avec barre de recherche
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
    if (inputSearch.value.length < 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        console.log("re", listBoxLi);

        if (
          listBoxLi[index].innerHTML.toLowerCase().includes(inputSearch.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });
}

export function filterUtensilsearch() {
  let inputSearch = document.getElementById("searchbar");
  //let listBoxLi = document.getElementsByClassName("listbox");
  /*inputSearch.addEventListener("keyup", () => {
    console.log(document.getElementsByClassName("listbox"));

    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        if (
          !listBoxLi[index].innerHTML.toLowerCase().includes(inputSearch.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });*/
}
