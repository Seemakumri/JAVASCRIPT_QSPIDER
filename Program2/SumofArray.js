function calculateSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum=0;
    count=0;
    arr.forEach((element,index)=> {
        sum+=element;
    });
   return sum;
}

const arr = [10, 20, 30, 40, 50];
const sum = calculateSum(arr);
console.log("The sum of array is:", sum);