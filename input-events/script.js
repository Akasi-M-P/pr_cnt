const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
const form = document.getElementById("item-form");

// INPUT EVENTS

/*function onInput(e) {
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not Checked";
}

function onFocus() {
  console.log("It's focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineColor = "yellow";
  itemInput.style.outlineWidth = "2px";
}

function onBlur() {
  console.log("It's not focused");
  itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);

*/

// FORM SUBMISSION

// function onSubmit(e) {
//   e.preventDefault();

//   const item = document.getElementById("item-input").value;
//   const priority = document.getElementById("priority-input").value;

//   if (item === "" || priority === "0") {
//     alert("Please complete all fields");
//   }
// }

// form.addEventListener("submit", onSubmit);

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);

  // const item = formData.get("item");
  // const priority = formData.get("priority");

  // console.log(item, priority);

  const entries = formData.entries();

  console.log(entries);

  for (let entry of entries) {
    console.log(entry);
  }
}

form.addEventListener("submit", onSubmit2);
