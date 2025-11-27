function seq(...args){

    let arr = [...args];

    function a(arg) {
        if (typeof arg === 'function') {
            arr.push(arg);
            return a;
        }
        else if (typeof arg === 'number') {
            return arr.reduceRight((res, fn) => fn(res), arg);
        }
    };

    return a;
};

console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
);

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
);


console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
);
