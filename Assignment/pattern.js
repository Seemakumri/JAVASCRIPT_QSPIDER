let input=document.querySelector("input");
let container=document.querySelector(".container");
console.log(input);
let numbers=document.createElement("p");
numbers.innerText="Numbers are Mandatory";
container.append(numbers)

let char=document.createElement("p");
char.innerText="Special Char are Mandatory";
container.append(char)

let uppercase=document.createElement("p");
uppercase.innerText="uppercase are Mandatory";
container.append(uppercase)
 

input.addEventListener("change",(e)=>{
  
 let inputValue=e.target.value 
 if (inputValue !="") {
    container.style.display="block"
 }
 inputValue.split("").forEach((element,i) => {
    let data=element.charCodeAt(i);
    console.log(data);
    
    if (data>=65 && data <= 97 ) {
        numbers.remove();
    }

    else if (data>0 && data <9 ) {
        numbers.remove();
    }
 });
 });

    
           
          
       
    
    

