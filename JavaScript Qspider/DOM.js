//1.
// console.log(document.getElementById("container"));// this is a method and here we pass the parrmete as a string fomrat
//if we have multiple element in same id, then it will target only 1st one, it will return single html element.

//2.
// console.log(document.getElementsByClassName("box")); //by target the class name, dom class method will return html collection,
// this html collection: it is a array like object, but this object is an object, thats why here not work any array method
// we can access the  values from html collection by using index 

// let htmlcollection= document.getElementsByClassName("box")
// console.log(htmlcollection);

//3.
// let htmlcollection1=document.getElementsByTagName("section");//by targeting the tag name,it also return html collection,
// by using index we can access an elemnts
// console.log(htmlcollection1);

//4.
//let htmlcollection2=document.querySelector("#container"); //we can target the html elmetn who have id, class , tag. 
//if elemnt have any of then like id, then still we target that html element. if u are udong id #, class .,
// console.log(htmlcollection2);// it is targing the 1st element , if we have same id,class, tag name. it is returning one sngle element

//5.
//let htmlcollection3=document.querySelectorAll("#container"); //it will also accept 3 thing id , class & tag, document.querySelectorAll will retutn nodesist
// console.log(htmlcollection3); 
//nodelist:- it is the collection of all nodes, each elements is nothing but a nodes, it is also array ;like object. 
//we can access the elemts by using index value


//how to modify the document by 

// let section = document.getElementById("container"); //1st:- target the element and put into a varible 
// section.style.background="linear-gradient(to right,red,yellow,green)"; //to modify the box , use style to change the background color
// section.style.borderRadius="50%";
// section.style.backgroundColor="red";
// section.style.boxShadow="0px 20px 10px black"


// let section2 = document.getElementsByClassName("box");
// section2[1].style.backgroundColor="orange";
// section2[1].style.borderRadius="50%";

// let section3 = document.getElementsByClassName("box");
// section3[2].style.backgroundColor="green";
// section3[2].style.borderRadius="50%";

// let h1 = document.getElementById("heading");
// h1.style.textShadow="0px 20px 10px black";
// h1.style.color=" blue";
// h1.style.backgroundColor="orange";
// h1.style.textDecorationLine="underline";
// //h1.style.textDecorationStyle="wavy";
// h1.style.fontFamily="Georgia, serif";
// h1.style.letterSpacing="1px";
// h1.style.textAlign="center";

// let h2 = document.getElementsByClassName("text");
// h2[1].style.textDecorationThickness="5px"
// h2[1].style.color=" darkred";
// h2[1].style.textShadow="0px 10px 10px black";
// h2[1].style.textDecorationLine="underline";
// //h2[1].style.textDecorationStyle="dotted";
// h2[1].style.textDecorationColor="black";
// h2[1].style.textAlign="center";
// h2[1].style.fontFamily="Georgia, serif";
// h2[1].style.fontSize="40px";
// h2[1].style.fontWeight="2px";
// h2[1].style.letterSpacing="1px";


// let h4 = document.getElementsByClassName("text");
// h4[3].style.color="orange";
// h4[3].style.textDecorationLine="underline";
// //h4[3].style.textDecorationStyle="wavy";
// h4[3].style.textShadow="0px 10px 10px black";
// h4[3].style.fontFamily="Gill Sans Extrabold";
// h4[3].style.fontSize="40px";
// h4[3].style.fontWeight="2px";
// h4[3].style.letterSpacing="1px";
// h4[3].style.wordSpacing="5px";
// h4[3].style.textDecorationThickness= "9px";
// h4[3].style.textAlign="center";

// let h5 = document.getElementsByClassName("text");
// h5[4].style.color="voilet";
// h5[4].style.textDecorationLine="underline";
// //h5[4].style.textDecorationStyle="wavy";
// h5[4].style.textShadow="0px 10px 10px black";
// h5[4].style.fontFamily="Gill Sans Extrabold";
// h5[4].style.fontSize="40px";
// h5[4].style.fontWeight="2px";
// h5[4].style.letterSpacing="1px";
// h5[4].style.wordSpacing="5px";
// h5[4].style.textDecorationThickness= "9px";
// h5[4].style.textAlign="center";

// let h6 = document.getElementsByClassName("text");
// h6[5].style.color="yellow";
// h6[5].style.textDecorationLine="underline";
// //h6[5].style.textDecorationStyle="wavy";
// h6[5].style.textShadow="0px 10px 10px black";
// h6[5].style.fontFamily="Gill Sans Extrabold";
// h6[5].style.fontSize="40px";
// h6[5].style.fontWeight="2px";
// h6[5].style.letterSpacing="1px";
// h6[5].style.wordSpacing="5px";
// h6[5].style.textDecorationThickness= "9px";
// h6[5].style.textAlign="center";

// let h3 = document.getElementsByClassName("text");
// h3[2].style.color=" darkgreen";
// h3[2].style.textDecorationLine="underline";
// //h3[2].style.textDecorationStyle="wavy";
// h3[2].style.textShadow="0px 10px 10px black";
// h3[2].style.fontFamily="Gill Sans Extrabold";
// h3[2].style.fontSize="40px";
// h3[2].style.fontWeight="2px";
// h3[2].style.textAlign="center";
// h3[2].style.letterSpacing="1px";
// h3[2].style.wordSpacing="5px";
// h3[2].style.textDecorationThickness= "9px";
// h3[2].styl.textShadow="0px 10px 10px black";


//dom traversing

// let section = document.createElement("section");
// section.setAttribute("class", "container"); //it have 2 parameter (attribute name, attribute value)
// section.setAttribute("id", "box"); // we can pass multiple class in class name

// section.innerText="hello section"; // it is used to insert,update(show text inside output) 

// let body=document.querySelector("body");//append to insert any created html element, 
//we have to target the body and then insert becz we write code insdie the body tag
// body.append(section);
// console.log(section);

let body=document.querySelector("body");
//body.append(h1,h2); //by using appendchild we can insert only one element, but by using append we can inset multiples element
let h1 = document.createElement("h1");
h1.setAttribute("class", "container");
h1.innerText="Hello World";
body.append(h1);
console.log(h1);

let h2 = document.createElement("h2");
h2.setAttribute("id", "container");
h2.innerText="hello world";
body.append(h2);
console.log(h2);

//let container= document.querySelector("#container"); //it will reomove 1st element
//container.remove();

let container = document.getElementsByClassName("box"); // it will remove 2nd element by appling index
container[1].remove();


let section = document.querySelector("section");
section.innerHTML += "<h1>HII, I AM H1</h1>"; //here use + to take both element that present inside the section and h1 tag that is in js 
console.log(section.innerHTML); //by using innerhtml we can access html element, to want to replace that pargraph tag by h1
console.log(section.children); //to access the children that present inside the html page in paragrph





