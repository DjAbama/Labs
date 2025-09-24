
let arr = [];

function range(start, end){
    for(let i = start; i <= end; i++)
        arr.push(i);
    console.log(arr);
    arr = [];
}

function rangeOdd(start, end){
    for(let i = start; i <= end; i++)
        if(i%2 == 0) {
            arr.push(i);
        }
    console.log(arr);
    arr = [];
}

range(15, 30);
rangeOdd(15, 30);