let promise = new Promise((resolve, reject)=>{
    if(10<30){
        resolve("promise is resolved");
    }else{
        reject("Promise is rejected");
    }
});
 promise.then((data)=>{ //whenver promise is resolve on that time we will use then method. it will accept one call back
// function, and call back fun will accept one parameter, and parameter can be anything
console.log(data);
 });

//if promise is false like 10>30, then
 
promise.catch((error)=>{
   console.log(error);
});

//we can apply then or catch in same code

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error) // if does matter promise is resoled or rejected, then also you want to perform another action, 
}).finally((final)=>{ // then we have finally method. finally is default method
    console.log(final)
})