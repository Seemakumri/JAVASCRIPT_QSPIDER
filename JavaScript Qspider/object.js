let emp = { //syntax of object (create)
    empName : "Kishan", //Object consist of key value pair, in object we have to sperate each key value into comma (,)
    empId : 13,
    salary : 5000,
    job : "ASE"
};  // now we have to perform CRUD Operation
// to access(read) object data we have 2 ways, by using .notation , by using [] array
console.log(emp.empName); //1st way
console.log(emp["salary"]); //2nd way , this is how accessing the data from object

emp.mgr=2040; //we can insert(update) any key with the object. emp=object name(.)mgr= key name
console.log(emp)

// for already key present in the emp that pervious value will override by new value,
// if no key is present the it will add new key value

emp.empId = 2040;
console.log(emp)

//if salary in array like salary : [20, 30] ,then on clg(emp["salary"]) and we pass the index for particular element just call that salary in array
// if salary is in function like salary () => {}, then we call that salary in clg (salary)
delete emp.salary // if we want (delete) salary key from existing object so use delete keyword
console.log(emp);

//2nd way to insert object, by using object construction (new version)

let obj = new Object(); //object in construction
obj.empName="pranav"; //inserting an object
console.log(obj)

function fun(a,b,c,d){ // we can create a carbon copy for this function and we can do changes on that copies.
    console.log(a,b,c,d);

}
//syntax to create new keyword
let fun1=new fun(10,20,30,40);//it will create one more copy for the function and multiple copy of fun. the object will store in fun1
let fun2=new fun(100,200,300,400); //this is also create one more copy for the function. the object will store in fun1
fun1.id=40000; //we can make changes, like this we can insert values
console.log(fun1);
console.log(fun2);
//to store a vlaue fun{} then use this keyword like this, this.ss=a; but it will access on all function for fun1, fun2,
// bcz these are the carbon copy of fun.

//in object if we want make variable value as a object keywords 
//let abc=30 ;
let abc= 30 > 50 ? "Login" : "Logout"; //{output = logOut:"jaduu" and 30 < 50  output = login:"jaddu"} 
let emp1 = { 
    empName : "Kishan", 
    empId : 13,
    salary : [20.5, 30],
    job : "ASE",
    [abc] : "jaddu",//this is the way to access any variable value as a key, then we have to wrap that varible in array operator.
};
console.log(emp1);



//OBJECT METHOD//
let emp2 = { 
    empName : "Kishan", 
    empId : 13,
    salary : [20.5, 70],
    job : "ASE",

    //1.KEYS
    dance: function dancing(){ /*dance is a key and the value of dance is fun so directly we can call it. 
        if there is no provide keyname the fun name will consider as a keyname. */
       console.log("Dancing"); 
   },
}; 
console.log(emp2);
emp2.dance();

   
console.log(emp2.salary[0]);

console.log(Object.keys(emp2));// -it will return array of  key(object constructor)
Object.keys(emp2).forEach((ele, i, arr)=>{
    console.log(emp2[ele])
});
//if the key not present in object then it will give undefined

//2.VALUES
console.log(Object.values(emp2));

//3. ENTRIES
console.log(Object.entries(emp2));

//4. ASSIGN
console.log(Object.assign({},emp,emp2)); //it will accept 2 parameter(target obj, source obj(multiple source obj we can 
//pass)) it will affect target object, by using of assign method we can add traget object data into original object.
//{} just pass dummy object as a target , and now all the data  will store in {} target, by {} creating this , 
//it will not affect on terget object.
   
//5. SEAL
Object.seal(emp); //once you seal the object then it will not deleted that object, we cannot add any key
emp.mgr=3000; // but we updation , only updation is possible
delete emp.job;
console.log(emp);

/* insertion is not possible in seal , freeze
deletion is not possible in both
updation is possible in SEAL but not possible in freeze */

//6. isSEALED
console.log(Object.isSealed(emp));

//7. FREEZE
console.log(Object.freeze(emp2));

//8. isFROZEN
console.log(Object.isFrozen(emp2));

//9. hasOwnProperty
console.log(emp.hasOwnProperty("empId")); //here we pass object name on the place of Object

///.....................///

let emp3 = { 
    empName : "Seema", 
    empId : 13,
    salary : [20.5, 70],
    job : {
        jobName: "ASE",
    }
};
console.log(emp3.job.jobName);