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
    if (value) {
      addItem(value);
      input.value = "";
    }
  });
  return form;
}
