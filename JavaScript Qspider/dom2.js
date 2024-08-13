
let ol = document.querySelector("ol");
let cities=["Delhi", "Banglore", "Lucknow", "Bihar", "Bnaras", "Mumbai", "Maharastra", "Pune", "Gurugram", "Noida"];

cities.forEach((ele, i , arr)=>{
ol.innerHTML +=`<li>${ele}</li>`; //it will give only last value, if we use + with = inside it then it will give all valuse in the output
});

let select = document.querySelector("select");
let cities1 = ["Delhi", "Banglore", "Lucknow", "Bihar", "Bnaras", "Mumbai", "Maharastra", "Pune", "Gurugram", "Noida", "Patna", "Punja","Chandighard", "Mohali", "Raipur", "Jaipur", "Gujrat"];

cities1.forEach((ele, i , arr)=>{
select.innerHTML+=`<option>${ele}</option>`;
});