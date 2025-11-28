const array = [1, 2, 3, 4, 5, 6, 7];

function removeElements(arr, ...args){
    for (let x of args) {
        if (arr.indexOf(x) >= 0) {
            let a = arr.indexOf(x);
            arr.splice(a, 1);
        }
    }
    return arr;
}

console.log(removeElements(array, 5, 1, 6));

