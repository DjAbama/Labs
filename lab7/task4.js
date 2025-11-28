function difference(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) < 0) {
            result.push(array1[i]);
        }
    }

    return result;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);