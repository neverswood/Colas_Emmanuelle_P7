import { recipes } from "./data/recipes.js";
import { getItemDevice } from "./interface.js";
import { filterTagDevice } from "./tags.js";

function getDevice() {
  let deviceByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    deviceByRecipes.push(recipes[index].appliance);
  }
  const allDevices = deviceByRecipes.flat();

  return new Set(allDevices);
}

var dropdownDeviceIsClosed = true;

export function dropdownDevices() {
  const dropdownDevices = document.getElementById("listbox-nameDevice");
  const chevron = document.getElementById("chevron2");
  const listBox = document.getElementById("listbox-devices");
  const searchDevice = document.getElementById("search-device");
  dropdownDevices.addEventListener("click", (e) => {
    searchDevice.style.display = "block";
    dropdownDeviceIsClosed = false;
    const devices = [...new Set(getDevice())];
    document.getElementById("listbox-nameDevice").style.display = "none";
    document.getElementById("dropdownDevice").style.width = "667px";

    //dropdownDevices.classList.add("DeviceOpen");
    listBox.innerHTML = `<ul>${getItemDevice(devices)}</ul>`;
    filterTagDevice();
  });
  chevron.addEventListener("click", (e) => {
    dropdownDeviceIsClosed = true;
    document.getElementById("search-device").style.display = "none";
    document.getElementById("listbox-nameDevice").style.display = "flex";
    //dropdownDevices.classList.remove("devicesOpen");
    listBox.innerHTML = "";
  });
}

export function filterDevice() {
  let inputSearch = document.getElementById("input-device");
  let listBoxLi = document.getElementsByClassName("listbox");
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

/*inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < recipes.length; index++) {
        const deviceRecipeExist = recipes[index].appliances.indexOf(
          inputSearch.value.toLowerCase()
        );
        if (deviceRecipeExist == -1) {
          const listbox = document.querySelector(".listbox");
          listbox.delete(-1);
          console.log(delete listbox[-1]);
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
  });*/
