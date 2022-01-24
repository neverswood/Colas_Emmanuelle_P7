export function filterTagUtensil() {
  // quand je clic sur un element de la liste il s'affiche en tag
  let listBox = document.getElementById("listbox-utensils");
  let listBoxLi = document.getElementsByClassName("listbox");
  let list = listBox.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    listBoxLi[index].addEventListener("click", (event) => {
      let tag = document.getElementById("tag");
      let spanTag = document.createElement("span");
      spanTag.setAttribute("class", "tag-utensil");
      tag.appendChild(spanTag);
      spanTag.innerHTML =
        event.target.textContent + `<i class="far fa-times-circle"></i>`;
    });
  }
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
      spanTag.innerHTML =
        event.target.textContent + `<i class="far fa-times-circle"></i>`;
    });
  }
}

export function filterTagDevice() {
  // quand je clic sur un element de la liste il s'affiche en tag
  let listBox = document.getElementById("listbox-devices");
  let listBoxLi = document.getElementsByClassName("listbox");
  let list = listBox.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    listBoxLi[index].addEventListener("click", (event) => {
      let tag = document.getElementById("tag");
      let spanTag = document.createElement("span");
      spanTag.setAttribute("class", "tag-device");
      tag.appendChild(spanTag);
      spanTag.innerHTML =
        event.target.textContent + `<i class="far fa-times-circle"></i>`;
    });
  }
}
