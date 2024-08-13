console.log("start")

setTimeout (()=>{
    console.log("Hello world 1")
}, 5000); //it will accept 2 parameter(call back fun, time interval in milli sec), whenever you want some dealy there you
// use settimeout, it will execute after finish the time intrval , only once


setTimeout (()=>{
    console.log("Hello world 2") // print line will execute one by one, it will not affect our asynchrous code.
    // but it will seperate the asynchronous method then execute seperatly 
}, 7000);

console.log("middle");

setTimeout (()=>{
    console.log("Hello world 3")
}, 2000);

setTimeout (()=>{
    console.log("Hello world 4")
}, 1000);

setTimeout (()=>{
    console.log("Hello world 5")
}, 10000);

console.log("end");


//setinterval() same syntax sa settimout, ex:- otp 

// setInterval (()=>{
//  console.log("hello world");
//  console.log("Hello World");
// }, 3000); //it will execute repeadtly after every time interval (3 sec)

let setdata=setInterval (()=>{
    console.log("hello world");
    console.log("Hello World");
   }, 3000);

setInterval (()=>{
   clearInterval(setdata);
   }, 10000);