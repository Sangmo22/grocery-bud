import { editCompleted, deleteItem, startEdit } from "./app.js";

export function createSingleItem(item) {
  const div = document.createElement("div");
  div.classList.add("single-item");

  const timeLabel = formatTimestamp(item.createdAt);
  const timeMarkup = timeLabel ? `<small class="item-time">${timeLabel}</small>` : "";

  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <div class="item-text">
      <p style="text-decoration: ${item.completed ? "line-through" : "none"}">${item.name}</p>
      ${timeMarkup}
    </div>
    <button class="btn icon-btn edit-btn" type="button">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `;

  const checkbox = div.querySelector("input[type='checkbox']");
  checkbox.addEventListener("change", () => editCompleted(item.id));

  const removeBtn = div.querySelector(".remove-btn");
  removeBtn.addEventListener("click", () => deleteItem(item.id));

  const editBtn = div.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => startEdit(item.id));

  return div;
}

function formatTimestamp(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return `Added ${date.toLocaleString()}`;
}
