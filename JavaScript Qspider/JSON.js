// let obj ={
//     empName: "Binod",
//     empId: 12,
//     salary: 30000,
// };
// console.log(obj);
// console.log(JSON.stringify(obj)); //convert js to json
// let jsonData = JSON.parse(obj);



// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// let [a,b,c,d,e, ...t]=[...arr]; //...this is spread operator, [a,b,c,d,e, ...ar] rest operator
// console.log(a,b);

// function sum(a,b,c,d,...ab){
//     console.log(a+b+c+d); // by distructuring the array we can take any varaible name
//     console.log(ab);
// }
// sum(10,20,30,40,50,60,70);

//2. object DESTRUCTURING: BY destructring object we use key name, we can't use random variable name in curly braces{}

// let emp={
//     empName: "Seema",
//     empId: 20,
//     salary: 60000,
//     mgrNo: 3345,
//     comm: 2000,
//     DOB: "15/10/2001"
// };
// console.log(emp.empName); //before destructring

// let{empName,salary,mgrNo} = {...emp}; //syntax: after destructuring we can pass directly keyname , sequence does not matter
// console.log(empName); //like this

//local storage
localStorage.setItem("password", "123456789"); //this is for insert the data
console.log(localStorage.getItem("password")); //here we pass keyname
localStorage.removeItem("password");
localStorage.clear();

let a = "pass";
localStorage.setItem(`${a}`, "12334");
console.log(localStorage.getItem(`${a}`));
localStorage.clear(a);


