function contract(fn, ...types) {
    return function(...args) {
        let a = 0;

        for (let i of args) {
            if (typeof i !== typeof types[a]()) {
                throw new TypeError("Error");
            }
            a++;
        }

        const result = fn(...args);

        const expectedResultType = types[types.length - 1];
        if (typeof result !== typeof expectedResultType()) {
            throw new TypeError("Error");
        }
        
        return result;
    }
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); 