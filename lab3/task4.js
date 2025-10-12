let iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

function itr(object){
    res = []
    for(let i = 0; i < Object.keys(object).length; i++){
        if(typeof object[Object.keys(object)[i]] == 'function'){
            res.push(Object.keys(object)[i], object[Object.keys(object)[i]].length)
        }
    }

    return res;
}

console.log(itr(iface));
