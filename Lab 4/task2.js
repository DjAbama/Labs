arr = ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

max = 0;

for (let i = 0; i < arr.length; i++) {
    for (let o = 0; o < arr[i].length; o++) {
        if (arr[i][o] > max) {
            max = arr[i][o];
        }
    }
}

console.log(max);