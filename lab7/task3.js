
function unique(array) {
    const arr= [];

    for (let i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) === 0 || arr.indexOf(array[i]) > 0) {
            continue;
        }
        arr.push(array[i]);
    }

    return arr;
}


const result = unique([2, 1, 1, 3, 2]);
console.log(result);