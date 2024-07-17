//implicite 
console.log(10+10); //20
console.log(10+"10"); //1010
console.log("10"-10); //0
console.log(10-"10"); //0
console.log("10"*10);//100 stinrg is converted into number
console.log("10"/10); //1
console.log("10"+ +10); //1010
console.log("10"- +10); //0
console.log("10"- -10); //20
console.log(10 - ""); //10
console.log(10 - "a"); //NAN not a number
console.log(10 + true); //11
console.log(10+ false); //10
console.log(false + "false"); //falsefalse
console.log(false - "false"); //NaN
console.log(false - ""); //0 where "absd" its come then it will give NaN output

//explicit typecasting
// console.log(10 + Boolean (" ")) // falsey value it will false and with Boolean(" ")there empty, output is false, 
// console.log(10 + Boolean ("ac ")) //truthy value it will true and with Boolean(" as") there is not empty, output is true

//let a1 = prompt("Enter your graduation percentage");
//let b = prompt("Enter your 12th percentage");
//console.log(parseInt(a) + parseInt(b)); //parseint :- it will only execute the number , if firstly comes number after the no.
// will come anything then it will not take it. and also firstly come anything without no. then it will not take it.
//console.log(parseFloat(a) + parseFloat(b)); //parsefloat is use to add the number for float and interger values 

//ternary operator
// let a= 20;
// console.log (a>50? "true" : "false");

// let value = Number(prompt("Enter your age"))
// switch (true) {
//     case value<15:
//         console.log("got to school");
//         break;
//     case value<18:
//         console.log("got to college");
//         break;
//     default:
//         console.log("default block is excuted");
//         break;
// }
// let b = 20;
// while(a>10){
//     console.log("a is greater than 20"); //clg
//     a++
// }

// do{
//     a++
//     console.log("a is greater than 10");
// }
//  while(true);

function fun(a,b,c){
    console.log(a,b,c);
}
fun(10,20,30);