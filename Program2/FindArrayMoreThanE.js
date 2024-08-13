function FindEleMoreThanAvg(arr) {
    let sum=0;
    count=0;
    arr.forEach((element,index)=> {
        sum+=element;
        count++;
    });
    let avg=sum/count;
    let result=[];
    arr.forEach((element,index) => {
        if(element>avg)
        {
            result.push(element);
        }
        
    });

   return result;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(FindEleMoreThanAvg(arr));