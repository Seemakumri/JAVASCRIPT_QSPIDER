function Average(arr) {
    let sum=0;
    count=0;
    arr.forEach((element,index)=> {
        sum+=element;
        count++;
    });
    let avg=sum/count;
   return avg;
}

const arr = [1, 2, 3, 4, 5, 6];
const average = Average(arr);
console.log("The average is:", average);