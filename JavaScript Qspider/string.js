
// let str = 'Velocitia';  //single quotes
// console.log(typeof str)

// let str1 = "Velocitia";  //double quotes
// console.log(typeof str1)

// let str2 =`Velocitia`;   //bactick
// console.log(typeof str2)

//there are 2 way to use str 1. +, 2. intrpoliation{}
//1. 
// let age = prompt("Enter your age")
// let str3="Age of the person is" + age + "he is eligible for the voting" //first seperate that string then insert that variable means (concat)
// console.log(typeof str3)

// to use interpoliation we have to use bactick
/*it a technique to use variable in String
interpolation will work only in bactick ,here we cant use single q, double q 
when we use interpoliation in string then that  time string is called as template string*/
// let age1 = prompt("Enter your age")
// let str4=`Age of the person is ${age1} he is eligible for the voting`// first the string to use bactick
// console.log(typeof str4)


////////////////////////////////////////////////////////////
let str5 = "seemakumari";
//1.
console.log(str5.length);
//2. 
console.log(str5.slice(2,6));
console.log(str5.slice(-3 ,-2)); //it have +ve, -ve values, -ve index are start rigth to left, +ve left to rigth, it will accept -ve value
//3.
console.log(str5.substring(4,6)); //it will not accept -ve value, 
//4.
console.log(str5.substr(2,4)); //substr accept 2 parameters (Starting index, length),it will depricated no longer use
//5.
let str = "Saas is a css frame work";
console.log(str.replace("Saas", "tailwork" )); //it is used to replace the string, it will replace 2 parmeter(string which waant to be replace, replaced items)

let str7 = "java and java script both are different";
console.log(str7.replace("java script","javascript")) ;//in it will replace 1st occur but 
console.log(str7.replaceAll("java","python")) ; // it will replace all occurence
console.log(str7.toLowerCase());
console.log(str7.toUpperCase());
console.log(str7.concat(str,'',str5,'',str7)); // use to concat 2 string and more string
console.log(str.trimStart()); //it is use to remove the space from starting 
console.log(str.trimEnd());   //it is use to remove the space from ending
console.log(str.trim());      //it is use to remove the space from ending and staring (it is short hand)

let mobileNo = "1234567890"; // if we want to slice last 4 char
let nos = mobileNo.slice(6);
console.log(nos); 
console.log(nos.padStart(10, "*")); //first is the parameter for the number in a variable, and the passing of index in slice and pass the sting in padstart 
let nos1 = mobileNo.slice(0,4); //
console.log(nos1.padEnd(10, "*")); //{(how much length we want) length, (what you like)items}

console.log(str.charAt(3));
console.log(str5.charAt(1)); //it is not supporting -ve index, it will return the char of the index
console.log(str5.charCodeAt(2)); //it will convert char into ascii value
console.log(String.fromCharCode(101)); //it will convert ascii into string, it is a constructor method

console.log(str5.split()); //to convert string into array

//FOR LOOPS//
//1. FOR OF

let arr = [10,20,30,40,50];
for (const a of arr) { //it will return elements
    console.log(a);
//2. FOR IN
    for(const x in arr){ 
        console.log(x);
    }
    
}

let emp = { 
    empName : "Kishan", 
    empId : 13,
    salary : 5000,
    job : "ASE"
};
for (const x in emp) { 
    console.log(x);
}
// for (const x of emp) { 
//     console.log(x);
// }




