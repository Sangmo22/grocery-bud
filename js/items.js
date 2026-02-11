import { createSingleItem } from "./single-item.js";

export function createItems(items) {
  const div = document.createElement("div");
  div.classList.add("items");
  items.forEach((item) => {
    const singleItem = createSingleItem(item);
    div.appendChild(singleItem);
  });
  return div;
}
