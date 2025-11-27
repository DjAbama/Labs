const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

function pipe(...args) {
    let res = 0;
    for (let i of args) {
        if (typeof i !== 'function') {
            throw new Error("Error")
        }
    }

    return function (x) {
        res = x;
        for(let o of args){
            res = o(res)
        }
        return res;
    };

};

const a = pipe(inc, twice, cube);
console.log(a(5));
