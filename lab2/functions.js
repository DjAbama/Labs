arr = [];

function average(a, b){
    return (a+b)/2;
}

function square(x){
    return x**2;
}

function cube(x){
    return x**3;
}

function calculate(){
    for(let i = 0; i < 10; i++){
    arr.push(average(square(i), cube(i)))
    }
}

calculate()

console.log(arr);


