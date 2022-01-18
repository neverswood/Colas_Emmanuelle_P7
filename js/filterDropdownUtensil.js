import { recipes } from "./data/recipes.js";

export function filterUtensil() {
  let inputSearch = document.getElementById("input-device");
  console.log(
    document.getElementById("listbox-devices").getElementsByTagName("ul")
  );

  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < recipes.length; index++) {
        const list = document
          .getElementById("listbox-devices")
          .getElementsByTagName("ul");
        for (let index = 0; index < list.length; index++) {
          console.log(list[index].ustensils);

          var deviceRecipeExist = list[index].ustensils
            .toLowerCase()
            .indexOf(inputSearch.value.toLowerCase());
        }

        if (deviceRecipeExist == -1) {
          document.getElementById("listbox-utensils li")[index].style.display =
            "none";
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
