function calculateAverage(arr) {
    if (arr.length === 1) {
        return arr[0];
    } 
    let larg=arr[0];
    for(let i=1;i<=arr.length;i++)
    {
        if(arr[i]>larg)
            larg=arr[i];
    }
    return larg;
}

const arr = [1, 8,10, 2, 3, 6, 4, 9, 5];
const largest = calculateAverage(arr);
console.log("The largest elemet is:", largest);