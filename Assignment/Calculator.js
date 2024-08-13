let input = document.querySelector(".input");
let buttons = document.getElementsByTagName("button");


let finalVal = Number(input.innerText); //convert string into number as we have passed
let inputVal = 0;
Array.from(buttons).forEach((element)=>{ //array.from is used to convert in array
    element.addEventListener("click", (e)=>{
       let val = e.target.innerText;
       if(
        val != "+" &&
        val != "/" &&
        val != "-" &&
        val != "=" &&
        val != "*" &&
        val != "cl" 
       ){
        inputVal = val;
        input.innerText = val;
       }

        if(e.target.innerText=="+"){ //target is targert the particular element
       //console.log(inputVal);
       input.innerText = finalVal;
       add(inputVal);
       } 
    });
});

let add = (val) =>{
    console.log(val);
    finalVal +=Number(val);
    input.innerText = finalVal;
} ;




