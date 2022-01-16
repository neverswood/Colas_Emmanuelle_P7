import { recipes } from "./data/recipes.js";

function getDevice() {
  let deviceByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    deviceByRecipes.push(recipes[index].appliance);
  }
  const allDevices = deviceByRecipes.flat();

  return new Set(allDevices);
}

function getItemDevice(devices) {
  let item = "";
  for (let index = 0; index < devices.length; index++) {
    item += `<li>${devices[index]}</li>`;
  }
  console.log(item);
  return item;
}

var dropdownDeviceIsClosed = true;

export function dropdownDevices() {
  const dropdownDevices = document.getElementById("listbox-nameDevice");
  const chevron = document.getElementById("chevron2");
  const listBox = document.getElementById("listbox-devices");
  dropdownDevices.addEventListener("click", (e) => {
    dropdownDeviceIsClosed = false;
    const devices = [...new Set(getDevice())];
    document.getElementById("search-device").style.display = "block";
    document.getElementById("listbox-nameDevice").style.display = "none";
    //dropdownDevices.classList.add("DeviceOpen");
    listBox.innerHTML = `<ul>${getItemDevice(devices)}</ul>`;
  });
  chevron.addEventListener("click", (e) => {
    dropdownDeviceIsClosed = true;
    document.getElementById("search-device").style.display = "none";
    document.getElementById("listbox-nameDevice").style.display = "block";
    //dropdownDevices.classList.remove("devicesOpen");
    listBox.innerHTML = "";
  });
}
