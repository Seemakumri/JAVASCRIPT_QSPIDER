const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arr.push(100); // insert at the end
console.log(arr);
console.log(arr.pop());
console.log(arr.unshift(8)); // insert at starting
console.log(arr.length); // it is a property it find length of array 
console.log(arr.indexOf(8)); //indexof method will accept an array element and it return the index value of first occurence.
console.log(arr.lastIndexOf(8)); //it return the index value of last occurence.
console.log(arr.includes(40)); // return type of includes is boolean
console.log(arr.at(8));  // we pass the index value
console.log(arr.slice(3, 8)); //it will accept 2 parameters(first index-last index), it will excluide the last index,
// passing the extra index(as it include)
//it will not affect to existing values(original array).
console.log(arr); 

console.log(arr.splice(2, 5, 100, 100, 100)); //it is used to add or remove element from the array, we can replace the element by splice)
console.log(arr); // (starting index , length , replacable items)
// difference between slice and splice
// 1-syntax is different, 2-we can replace the element in splice, 3 - slice will not affect the existing array 

console.log(typeof arr.join(" ")); //when we pass " " then it will remove , b/w the String, by giving the space b/w " "
//then it give space b/w the string, It is use to join all element of an array into string
//typeOf will check the type of datatype (in output it will give string)

const arr1 = [2, 3, 4, 4, 5, 6, 7, 8, 9, 12, 13];
const arr2 = [44, 55, 66, 77, 88];
console.log(arr1.concat(arr2)); //concat is use add one array to another array in concat method, if we want to add multiple
// array , then we can pass , multiple array in concat method,
// console.log(arr1.concat(arr2, aar3, aar4)). it will concat all arry and return new arrray it will not effect to original array.
console.log(arr);
console.log(arr.reverse()); // it will revese the array
console.log(arr.sort()); // it will the sort bitwise
console.log(arr);
console.log(arr.sort((a, b) => b - a)); //we will call comparable function inside sort , by passing the arrow fun in sort 
//method then it will sort into the acending order
//or decending order, it will accept call back fun. (b-a(descending order) , a-b:- it is a comparable fnction)
console.log(arr); // sort method is sorting bitwise (like 1st digit)  // sort is a call back function

//sort()three ways
// sort()
//sort((a,b)=>a-b)) for ascending 
//sort((a,b)=>b-a)) for decending,


// ADVANCE ARRAY METHODS
// ForEach()
// map()
// Filter()
// Find()
// Reduce()

//1. ForEach(): it is use to iterate of an array we use this method, it is HOF, and it will accept one call back fun and 
//this call back fun accept three parametere(array element , index value , complete array).
//it will not return any single value, it will return undefined MEANS no return any value 

let arr3 = [10, 20, 30, 40, 50, 60, 70, 80]; 
arr3.forEach((ele, i, ar) => { //paramete can be anything, it will iterating thats why the output will comes (8) array.
    console.log(ele,i,ar)
    //console.log(ele) // first parametre should be array element 
    //console.log(ar)// second parametre will iterate 8 times as the value are 8 in array
});


//let a  = arr3.forEach((ele, i, ar) => { 
   // return ele+5;
//});
//console.log(a)

console.log((ele,i,ar) => {  //in every array element we want to add value  , it will not return any value
   return ele+5;
});
console.log(a)   


//2. Map(): it will return new updaed array, in there we have to pass only expression, it will return updated array
//(syntax is same as foreach)
let b=arr3.map((ele, i, ar)=>{ // here it will return new updated array
    return ele +5;
});
console.log(b)

//3. filter(): it is used to filtered the array based on condition, and it will return new filtered array, 
//it will accept only condition(syntax is same as foreach and map)

let b1=arr3.filter((ele, i, ar)=>{ // here it will return new filtered array
    return ele >=30;
});
console.log(b1)

//4. find(): it will return single value and it will accept only condition

let b2=arr3.find((ele, i, ar)=>{ // here it will return only single value
    return ele >= 3;
});
console.log(b2)

//5. Reduce():it is iterating and along with performing some task. it will work left to right. it will accept 2 parameters,
//(call back fun,intial values) and that call-bcak fun accpet 2 parameter (Accumulators, current values) 
// after addition the vlaues will stored into accumulators
let arr4 = [10,20,30, 40, 50, 60, 70, 80, 90]
let result = arr4.reduce((accumaltors, currentVal) =>{
// let result = arr4.reduceRight((accumaltors, currentVal) =>{, it is similar ti reduce but it is work right to left (syntar is same)
    return accumaltors + currentVal;
}, 0); //0 is initial val for aqccumalator

console.log(result);

//15. FLAT ARRAY :- if we have nested array
//it will remove all the arry and return one single array and as we can all new arry with all values.
const arr5 = [[[[[[50, 70, [[[[10]]]], 20, 40]]]]]];
console.log(arr5.flat(5)); //array1 for neseted array bcz we have array inside the array
//const arr5 = [[[[[[[[[10]]]],20,40]]]]]; 
//console.log(arr.flat(9));
//const arr5 = [[[[[[[[[10]]]],20,40]]]]];  
//console.log(arr.flat(9));


