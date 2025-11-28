function iterate(object, callback){
    for(i in object){
        callback(i, object[i], ogject);
    }
}; 


const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
