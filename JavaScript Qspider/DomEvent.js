//1. by using HTML Attributes

// let section= document.querySelector("section");
// function changeColor(){
//     section.style.backgroundColor="red"; //for change color we have one event is onclick="" html attribut by applyin 
                                            //this in button tag then its work when you click the on to the button*/
// }

//to create cantainer we have 3 buttons, increase, decrease, reset

// let counter=document.querySelector(".counter");

// let count= parseInt(counter.innerText); //parseint is for becz i write 0 in html code in div tag and 0 is string we have
// convert into interger thats why we apply parseInt to take 0 as a integer
// console.log(count);
// function increment(){
//     count += 1; //after incrementing we have to insert updated values
//     counter.innerText=count;
// }

// function decrement(){
//     count -=1;
//     counter.innerText=count;
// }

// function reset(){
//     count = 0;
//     counter.innerText=count=0;
// }

//to mouse over square become circle
let section = document.querySelector("section");
function mouse(){
    section.style.borderRadius= "50%"
    
}
function mouse1(){
    section.style.borderRadius= ""
    
}

//2.by using addEventListener() : On is comes under in this way

//addEventListener will accept 2 argunmant  ( event name, call back fun)
let section1 = document.querySelector("section");
let button = document.querySelector("button");

button.addEventListener("mouseover", () => {
    section1.style.borderRadius = "50%";
});