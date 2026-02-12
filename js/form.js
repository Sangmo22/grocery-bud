import { addItem, updateItem } from "./app.js";

export function createForm(editItem) {
  const form = document.createElement("form");
  form.innerHTML = `
    <h1><i class="fa-solid fa-cart-shopping title-icon" aria-hidden="true"></i>Grocery Bud</h1>
    <div class="form-control">
      <input type="text" class="form-input" placeholder="e.g. garlics" value="${editItem ? editItem.name : ""}" />
      <button type="submit" class="btn">${editItem ? "Update Item" : "Add Item"}</button>
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
    if (editItem) {
      updateItem(editItem.id, value);
    } else {
      addItem(value);
    }
    input.value = "";
  });
  return form;
}
