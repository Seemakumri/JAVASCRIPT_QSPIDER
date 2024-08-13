//1. by unig fetch() method it will give promise, result is response

let fetchData= fetch("https://api.github.com/users") //it retuning one promise, to handle this 

.then((res)=>{ //we apply .then to resolved the promise, after this
   console.log(res.json()); //for fetching data have another method by applying .json to convert js 
  return res.json(); // we return the res(parameter) is response object with .json to convert into js promise. after this it retun promise
})
.then((data)=>{ // to resolve promise again use .then
    console.log(data);
 })
console.log(fetchData); 

//2. async & await: to create asynchronous we use async & await
// * async keyword is used to make any statemets asynchronous 

let section = document.querySelector("section"); 
let fetchData1= async ()=>{  //to make the any statement asynchronous 
let response = await fetch("https://api.github.com/users");//here we apply await to handle the promise and it will return
//a response. when the completely execution will done pointer will wait for particular postion
let data =  await response.json(); // here on the place of .then , we apply await to resolved the promise
// console.log(data);
   data.forEach((ele, index, arr) => {
    console.log(ele);
   displayUser(ele);
   });
};
fetchData1();

let displayUser = (data) =>{
    let card = document.createElement("div");
    card.setAttribute("class", "cards");
    card.innerHTML =`<img src="${data.avatar_url}" alt="" class="userImage" >
                     <h2>Name : ${data.login}</h2>
                     <p>Id : ${data.id}</p>`;
    section.append(card);

};



