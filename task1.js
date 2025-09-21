function inc(number){
    number++;
    return number;
}

const a = 5;
const b = inc(a);

console.dir({a, b});