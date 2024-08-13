function removeFalsyValues(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage
const arrayOfFalsyValues = ["seema",0, 1, false, 2, '', 3, null, 'a', undefined, 'b', NaN, 'c'];
const filteredArray = removeFalsyValues(arrayOfFalsyValues);
console.log(filteredArray); 