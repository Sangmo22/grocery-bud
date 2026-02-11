import { addItem } from "./app.js";

export function createForm() {
  const form = document.createElement("form");
  form.innerHTML = `
    <h1>Grocery Bud</h1>
    <div class="form-control">
      <input type="text" class="form-input" placeholder="e.g. garlics" />
      <button type="submit" class="btn">Add Item</button>
    </div>
  `;
  const input = form.querySelector(".form-input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) {
      alert("Please enter a valid item name.");
      return;
    }
    addItem(value);
    input.value = "";
  });
  return form;
}

import { updareItemName } from "./app.js";

export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");
  form.innerHTML = `
    <h1>Grocery Bud</h1>
    <div class="form-control">
      <input type="text" class="form-input" placeholder="e.g. garlics" value="${itemToEdit ? itemToEdit.name : ""}" />
      <button type="submit" class="btn">${editId ? "Update Item" : "Add Item"}</button>
    </div>
  `;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();
    if (!value) {
      alert("Please enter a valid item name.");
      return;
    }
    if (editId) {
      updareItemName(value);
    } else {
      addItem(value);
    }
    input.value = "";
  });
  return form;
}
