import { recipes } from "./data/recipes.js";
import { getItemIngredient } from "./interface.js";

function getIngredients() {
  let ingredientByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    const lesingredients = recipes[index].ingredients;
    for (let i = 0; i < lesingredients.length; i++) {
      ingredientByRecipes.push(lesingredients[i].ingredient);
    }
  }
  return new Set(ingredientByRecipes);
}

var dropdownIngredientsIsClosed = true;

export function dropdownIngredients() {
  const dropdownIngredients = document.getElementById("listbox-nameIngredient");
  const chevron = document.getElementById("chevron1");
  const listBox = document.getElementById("listbox-ingredients");
  dropdownIngredients.addEventListener("click", () => {
    dropdownIngredientsIsClosed = false;
    const ingredients = [...new Set(getIngredients())];
    document.getElementById("search-ingredients").style.display = "block";
    document.getElementById("listbox-nameIngredient").style.display = "none";
    listBox.innerHTML = `<ul>${getItemIngredient(ingredients)}</ul>`;
    filterTagIngredient();
  });
  chevron.addEventListener("click", () => {
    dropdownIngredientsIsClosed = true;
    document.getElementById("search-ingredients").style.display = "none";
    document.getElementById("listbox-nameIngredient").style.display = "flex";
    listBox.innerHTML = "";
  });
}

export function filterIngredient() {
  let inputSearch = document.getElementById("input-ingredients");
  let listBoxLi = document.getElementsByClassName("listbox");
  console.log("ft", document.getElementsByClassName("listbox"));
  inputSearch.addEventListener("keyup", () => {
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
  });
}

export function filterTagIngredient() {
  // quand je clic sur un element de la liste il s'affiche en tag
  let listBox = document.getElementById("listbox-ingredients");
  let listBoxLi = document.getElementsByClassName("listbox");
  let list = listBox.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    listBoxLi[index].addEventListener("click", (event) => {
      let tag = document.getElementById("tag");
      let spanTag = document.createElement("span");
      spanTag.setAttribute("class", "tag-ingredient");
      tag.appendChild(spanTag);
      spanTag.innerHTML = event.target.textContent;
    });
  }
}

/*  if (ingredientRecipeExist == -1) {
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
}*/
