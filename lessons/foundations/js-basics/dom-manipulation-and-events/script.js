// This is the div we are putting everything in
const container = document.querySelector("#container");

// Create a <p> with red text that says "Hey I'm red!"
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

// Create a <h3> with blue text that says "I'm a blue h3"
const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";

// Create a <div> with a black border and pink background color with the 
// following elements inside of it:
//      Another <h1> that says "I'm in a div"
//      a <p> that says "ME TOO!"
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";
div.appendChild(header1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
div.appendChild(paragraph2);

// Adding created elements to DOM
container.appendChild(paragraph);
container.appendChild(header3);
container.appendChild(div);

// Messing with buttons!
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e.target);
})

btn.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "blue";
})