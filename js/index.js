// Your code goes here

//mouse over
const header = document.querySelector(".main-navigation .logo-heading");

header.addEventListener("mouseover", (e) => {
    e.target.style.color = "red";
});

//click
header.addEventListener("click", (e) => {
    e.target.textContent = "Obaida's Bus. Hop On!!";
    e.target.style.fontSize = "35px";
});

// Double Click
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons[0].addEventListener("dblclick", (e) => {
    e.target.textContent = "I just waaanttt";
    e.target.style.backgroundColor = "black";
    e.target.style.scale = 3;
});

buttons[1].addEventListener("dblclick", (e) => {
    e.target.textContent = "you to knowwww";
    e.target.style.backgroundColor = "red";
    e.target.style.scale = 3;
});

buttons[2].addEventListener("dblclick", (e) => {
    e.target.textContent = "I've found a reaaason";
    e.target.style.backgroundColor = "blue";
    e.target.style.scale = 3;
});


// Drag
const topImage = document.querySelector(".intro img");

topImage.addEventListener("drag", (e) => {
    e.target.src = "img/img123.jpg";
});

// mouse enter and leave
const letsgo = document.querySelectorAll(".text-content p");

letsgo[0].addEventListener("mouseenter", (e) => {
    e.target.textContent = "ARE YOU FOCUSED YET???";
});

letsgo[0].addEventListener("mouseleave", (e) => {
    e.target.textContent = "SIIIKEE I AM OUT!!";
});

letsgo[1].addEventListener("mouseenter", (e) => {
    e.target.textContent = "ARE YOU FOCUSED YET???";
});

letsgo[1].addEventListener("mouseleave", (e) => {
    e.target.textContent = "SIIIKEE I AM OUT!!";
});


// copy

const intro = document.querySelector(".intro p");
console.log(intro)

function hi() {
    intro.textContent = "Welcome to my Fun BUS Page. Kick back and relaaax. Here in california all we care about is positive vibes, and we will provide you with that along with unforgettable memories";
    console.log(intro)
    intro.style.backgroundColor = "yellow";
}
intro.addEventListener("copy", hi)


// wheel

const destination = document.querySelector(".content-destination p");
console.log(destination)

destination.addEventListener("wheel", (e) => {
    e.target.textContent = "ARE YOU FOCUSED YET???";
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
});


// mouse
const blurred = document.querySelector(".content-destination img");

blurred.addEventListener("mousedown", (e) => {
    e.target.src = "img/OB.png";
});

// Drag Start

const duplicate = document.querySelector(".inverse-content img");

duplicate.addEventListener("dragstart", (e) => {
    e.target.src = "img/destination.jpg";
});

// Prevent Default
const home = document.querySelector('nav a');
home.addEventListener('click', function(event){
  event.preventDefault();
});

// Stop propogation
const main = document.querySelector('.home');
main.addEventListener('click', (e) =>{
    e.target.style.backgroundColor = "pink";
});

main.addEventListener('click', (e) => {
    e.stopPropagation();
});