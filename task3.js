let arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
let object = {number: 0, string: 0, boolean: 0};

for (let type of arr){
    object[typeof(type)] += 1;
}

for (let obj in object){
    console.log(obj, object[obj]);
}