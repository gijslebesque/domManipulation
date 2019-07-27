// the DOM
// <!-- The HTML you write is parsed by a web browser.
// The result is called the Document Object Model, or DOM.
// In other words it's the visual representation of your code.
// In terms of structure it'll look like your HTML.
// Changing the DOM in anyway is called DOM manipulation.
// The manipulation is done then with JavaScript.

// When a page is rendered we have access to the DOM witjh JavaScript via the document object.

// Selectors in order of specificity (from specific to general)
//1. Select by id
//2. Select by class
//3. select by tagname

//Returns an object.
const elementWithAnId = document.getElementById("anId");

elementWithAnId.style.color = "red";
elementWithAnId.innerHTML = "Some random new text";

// this returns an array of objects.
document.getElementsByClassName("aClassName");

const arrayOfElements = document.getElementsByClassName("aClassName");

for (let i = 0; i < arrayOfElements.length; i++) {
  const element = arrayOfElements[i];
  element.addEventListener("click", makeAlert);
  element.style.color = "blue";
}

// this returns an array of objects.
document.getElementsByTagName("anHtmlTagName");

//Returns an object.
document.querySelector("#anId");

// this returns an array of objects.@2™
document.querySelectorAll(".aClassName");

// Changing attributes
// Chaning innerHTML
//getting value

// Event listeners

// Creating elements

const element = document.createElement("a");
element.href = "https://google.com";
element.innerHTML = "Hello";

const parent = document.getElementById("anId");

parent.append(element);

function makeAlert() {
  alert("Bonjournooo");
}

const img = document.getElementById("anImg");

const header = document.getElementById("header");
console.log(header);
// const header = {
//     innerHTML = ""
// }

header.innerHTML = "Hello";

header.innerHTML = "Woei";

// img.setAttribute("src", "https://images-cdn.9gag.com/photo/a9dnogD_700b.jpg");

window.onload = function() {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", findElement);

  const familyContainer = document.getElementById("soprano-family");
  function findElement() {
    const livia = familyContainer.children[0];

    const tonyAndJanice = livia.children;

    const tony = tonyAndJanice[0];
    const janice = tonyAndJanice[1];

    const toniesChildren = tony.children;

    const antonyJunior = tony.getElementsByClassName("aj")[0];
    const grandma = antonyJunior.closest(".livia");

    const meadow = livia.querySelector(".meadow");

    const brother = meadow.nextSibling;

    debugger;
  }
};
