const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, x){
    if(arr.indexOf(x) >= 0){
        let a =arr.indexOf(x);
        arr.splice(a,1);
        return arr;
    }
    else{
        return arr;
    }
};

console.log(removeElement(array, 5));
