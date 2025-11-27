const inc = x => ++x;
const error = x => {
  throw new Error(`Error`);
};
const cube = x => x ** 3;

function comp(...args) {
  const arr = []; 

  function f(x) {
    let res = x; 

    try {
      for (let k = args.length - 1; k >= 0; k--) {
        let i = args[k]; 
        res = i(res); 
      }
      return res; 
    } catch (e) {
      arr.forEach(fn => fn(e));
      return undefined;
    }
  }

  f.on = (event, fn) => {
      if (event === 'error') arr.push(fn);
  };

  return f;
}

let a = comp(inc, error, cube);

a.on('error', (e) => console.log(e.message));

console.log(a(5));