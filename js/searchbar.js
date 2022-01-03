import recipes from "./recipes.js";

const allRecipes = recipes;

async function searchKeyword() {
  const searchbar = document.getElementById("searchbar");
  if (searchbar.value.length < 3) {
  }
}
searchKeyword();

const containerRecipe = document.getElementById("container-recipe");
const divRecipe = document.createElement("div");
const templateRecipe = `
<div class="recipe__total">
<div class="recipe__header">
<h3>allRecipes.indexOf("name")</h3>
<span>time</span>
</div>
<div>
<div class="recipe__ingrédients">
<p>ingredient: </p>
<span>quantity unit</span>
</div>
<div class="recipe__explanations"></div>
</div>
</div>
`;

console.log(allRecipes);
