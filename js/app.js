import { groceryItems } from "./data.js";

import { createItems } from "./items.js";
import { createForm } from "./form.js";

let items = groceryItems;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const form = createForm();
  app.appendChild(form);
  const itemsDiv = createItems(items);
  app.appendChild(itemsDiv);
}

render();

export function editCompleted(id) {
  items = items.map((item) => {
    if (item.id === id) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  render();
}

export function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  render();
  setTimeout(() => {
    alert("Item deleted successfully!");
  }, 500);
}

export function addItem(name) {
  const newItem = {
    id: Date.now().toString(),
    name,
    completed: false,
  };
  items = [...items, newItem];
  render();
}
