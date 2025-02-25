const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const shopItems = document.getElementById("shop-items");
const clearAllBtn = document.getElementById("clear-all");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function displayItemsFromLocalStorage() {
  const itemsFromLocalStorage = onGetItemsFromLocalStorage();

  itemsFromLocalStorage.forEach((item) => onAddToDOM(item));

  resetUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  // Check for edit mode
  if (isEditMode) {
    const itemToEdit = shopItems.querySelector(".edit-mode");

    onRemoveItemFromLocalStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit-mode");
    itemToEdit.remove();
    isEditMode = false;
  } else if (checkIfItemExist(newItem)) {
    alert("The Item already exists!");
    return;
  }

  onAddToDOM(newItem);

  onAddToLocalStorage(newItem);

  resetUI();

  itemInput.value = "";
}

function onAddToDOM(item) {
  const li = document.createElement("li");
  li.id = "item";
  li.className = "delete-item";

  const itemName = document.createTextNode(item);
  li.appendChild(itemName);

  const span = createSpan("span");
  const icon = createIcon("fa-solid fa-trash-can ", "delete");

  span.appendChild(icon);

  li.appendChild(span);

  shopItems.appendChild(li);
}

function createSpan(id) {
  const span = document.createElement("span");
  span.id = id;

  return span;
}

function createIcon(classes, id) {
  const icon = document.createElement("i");
  icon.className = classes;
  icon.id = id;

  return icon;
}

function onAddToLocalStorage(item) {
  const itemsFromLocalStorage = onGetItemsFromLocalStorage();

  itemsFromLocalStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemsFromLocalStorage));
}

function onGetItemsFromLocalStorage() {
  let itemsFromLocalStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromLocalStorage = [];
  } else {
    itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromLocalStorage;
}

function onClickItem(e) {
  if (e.target.parentElement.parentElement.classList.contains("delete-item")) {
    onDeleteItem(e.target.parentElement.parentElement);
  } else {
    console.log(e.target);
    onUpdateItem(e.target);
  }
}

function checkIfItemExist(item) {
  const itemsFromLocalStorage = onGetItemsFromLocalStorage();
  return itemsFromLocalStorage.includes(item);
}

function onUpdateItem(item) {
  isEditMode = true;

  shopItems
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update';
  formBtn.style.backgroundColor = "green";
  itemInput.value = item.textContent;
  console.log(item);
}

function onDeleteItem(item) {
  if (confirm("Are you sure?")) {
    // Remove item from DOM
    item.remove();

    // Remove item from storage
    onRemoveItemFromLocalStorage(item.textContent);
  }
}

function onRemoveItemFromLocalStorage(item) {
  let itemsFromLocalStorage = onGetItemsFromLocalStorage();

  // Filter out item to be removed
  itemsFromLocalStorage = itemsFromLocalStorage.filter((i) => i !== item);

  // Reset to localstorage
  localStorage.setItem("items", JSON.stringify(itemsFromLocalStorage));
}

function onClearAll(e) {
  while (shopItems.firstChild) {
    shopItems.removeChild(shopItems.firstChild);
  }

  // clear all items from localstorage
  localStorage.removeItem("items");

  resetUI();
}

function onFilterItems(e) {
  const shopList = shopItems.querySelectorAll("li");

  const text = e.target.value.toLowerCase();

  shopList.forEach((item) => {
    const itemName = item.firstChild.textContent;

    if (itemName.indexOf(text) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function resetUI() {
  const shopList = shopItems.querySelectorAll("li");
  if (shopList.length === 0) {
    itemFilter.style.display = "none";
    clearAllBtn.style.display = "none";
  } else {
    itemFilter.style.display = "block";
    clearAllBtn.style.display = "block";
  }

  formBtn.innerHTML = ' <i class="fa-solid fa-plus"></i> add item';
  formBtn.style.backgroundColor = "var(--secondary-colr)";
  formBtn.style.color = "var(--primary-color)";
  formBtn.style.isEditMode = false;
}

function init() {
  itemForm.addEventListener("submit", onAddItemSubmit);
  shopItems.addEventListener("click", onClickItem);
  clearAllBtn.addEventListener("click", onClearAll);
  itemFilter.addEventListener("input", onFilterItems);
  document.addEventListener("DOMContentLoaded", displayItemsFromLocalStorage);

  resetUI();
}

init();
