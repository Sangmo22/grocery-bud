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

export function editCompleted(id) {
  items = items.map((item) => {
    if (item.id === id) {
      return { ...item, checked: !item.checked };
    }
    return item;
  });
  render();
}
