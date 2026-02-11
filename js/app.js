import { groceryItems } from "./data.js";

import { createItems } from "./items.js";
import { createForm } from "./form.js";

let items = groceryItems;
let editId = null;

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const editItem = items.find((item) => item.id === editId) || null;
  const form = createForm(editItem);
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
    id: generateId(),
    name,
    completed: false,
  };
  items = [...items, newItem];
  render();
  setTimeout(() => {
    alert("Item added successfully!");
  }, 0);
}

export function startEdit(id) {
  editId = id;
  render();
  setTimeout(() => {
    const input = document.querySelector(".form-input");
    if (input) {
      input.focus();
      input.select();
    }
  }, 0);
}

export function updateItem(id, name) {
  items = items.map((item) => {
    if (item.id === id) {
      return { ...item, name };
    }
    return item;
  });
  editId = null;
  render();
  setTimeout(() => {
    alert("Item updated successfully!");
  }, 0);
}
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
