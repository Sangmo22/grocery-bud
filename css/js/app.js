import { groceryList } from "./data.js";
import { createSingleItem } from "./single-item.js";
import { createItems } from "./items.js";

let items = groceryList;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const itemsDiv = createItems(items);
  app.appendChild(itemsDiv);
}

render();
