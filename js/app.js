import { groceryItems } from "./data.js";

import { createItems } from "./items.js";
import { createForm } from "./form.js";

const STORAGE_KEY = "grocery-items";
let items = loadItems();
let editId = null;

function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return groceryItems;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : groceryItems;
  } catch (error) {
    return groceryItems;
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

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
  saveItems();
  render();
}

export function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  saveItems();
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
  saveItems();
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
  saveItems();
  editId = null;
  render();
  setTimeout(() => {
    alert("Item updated successfully!");
  }, 0);
}
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
