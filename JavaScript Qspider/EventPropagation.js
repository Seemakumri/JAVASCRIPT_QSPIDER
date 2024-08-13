let section = document.querySelector("section");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

section.addEventListener("click", (e)=>{
    e.stopPropagation()
    e.preventDefault() //to stop default behaviour ex:- refershing web page, navigation
   section.style.backgroundColor = "red";
});

box2.addEventListener("click", (e)=>{
    e.stopPropagation()
   box2.style.backgroundColor = "aqua";
});

box3.addEventListener("click", (e)=>{
    e.stopPropagation()
    box3.style.backgroundColor= "pink";
});