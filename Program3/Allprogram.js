//1. write a function that takes two numbers as argunments as argunment and return their sum
 function add(num1, num2){
    return (num1, num2);
}
const result = add(5, 7);
console.log( result);

//2. write a function that accepts a string returns it reversed
function reverse(str) {
    return str.split('').reverse().join('');
}

const str = "seema";
const str1 = reverse(str);
console.log(str1); 

//3. create a function that checks if a given number is prime number
function PrimeNumber(num){
    var i;
    var count=0;
    for(i=2; i<=num/2; i++){
        if (num%i==0){
            count++;
            break;
        }
    }
    if (count==0 && num!=1){
        console.log(num+" is a prime number");
    }else{
        console.log(num+" is a not prime number");
    }
    

}
let a1=parseInt(prompt("enter a number:-"));
PrimeNumber(a1);

