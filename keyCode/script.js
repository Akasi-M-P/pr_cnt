// const inserParent = document.querySelector("#insert");
// const keyDivs = inserParent.querySelectorAll(".key");

// addEventListener("keypress", function (e) {
//   const keyObj = {
//     key: e.key === " " ? "Space" : e.key,
//     keyCode: e.keyCode,
//     code: e.code,
//   };
//   console.log(keyObj);
//   keyDivs.forEach(function (div, index) {
//     if (index === null) {
//       div.innerHTML = "";
//     }
//     if (index === 0) {
//       div.innerHTML = `${keyObj.key} <small>e.key</small>`;
//       if (index === undefined) {
//         div.innerHTML = "";
//       }
//     } else if (index === 1) {
//       div.innerHTML = `${keyObj.keyCode} <small>e.keyCode</small>`;
//     } else if (index === 2) {
//       div.innerHTML = `${keyObj.code} <small>e.code</small>`;
//     }
//   });
// });

// Define a function called `onKeyDown` that will run whenever a key is pressed
function onKeyDown(e) {
  // Select the parent element with the ID "insert" where we will display the key information
  const insertParent = document.querySelector("#insert");

  // Clear the content inside the parent element to remove any previous key information
  insertParent.innerHTML = "";

  // Create an object called `keyObj` to store the key-related information
  const keyObj = {
    "e.key": e.key === " " ? "Space" : e.key, // If the key is a spacebar, display "Space" instead of " "
    "e.keyCode": e.keyCode, // Store the keyCode of the pressed key
    "e.code": e.code, // Store the physical key code (e.g., "KeyA" for the 'A' key)
  };

  // Log the `keyObj` to the console for debugging purposes
  console.log(keyObj);

  // Loop through each property in the `keyObj` object
  for (let key in keyObj) {
    // Create a new <div> element to hold the key information
    const div = document.createElement("div");
    // Add the class "key" to the <div> for styling purposes
    div.className = "key";

    // Create a <small> element to display the label (e.g., "e.key", "e.keyCode", etc.)
    const small = document.createElement("small");

    // Create text nodes for the label (e.g., "e.key") and the value (e.g., "a", "65", etc.)
    const keyText = document.createTextNode(key); // Label (e.g., "e.key")
    const valueText = document.createTextNode(keyObj[key]); // Value (e.g., "a", "65", etc.)

    // Add the label text to the <small> element
    small.appendChild(keyText);
    // Add the value text to the <div> element
    div.appendChild(valueText);
    // Add the <small> element (with the label) to the <div> element
    div.appendChild(small);
    // Add the <div> element to the parent container (#insert)
    insertParent.appendChild(div);
  }
}

// Add an event listener to the `window` object to listen for the "keydown" event
// When a key is pressed, the `onKeyDown` function will be called
window.addEventListener("keydown", onKeyDown);

// e.key
// e.keyCodef
//e.code
