function inc(Num){
    Num.n++;
}

const obj = { n: 5 };
inc(obj);
console.dir(obj);