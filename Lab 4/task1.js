function sum(...args) {
    let res = 0;

    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }
    console.log(res);
    res = 0;


    for (const num of args) {
        res += num;
    }
    console.log(res);
    res = 0;

    
    let o = 0;
    while (o < args.length) {
        res += args[o];
        o++;
    }
    console.log(res);
    res = 0;


    let j = 0;
    do {
        res += args[j];
        j++;
    } while (j < args.length);
    console.log(res);
    res = 0;

    console.log(args.reduce((res, n) => res + n, 0));
    res = 0;
}

sum(5, 2, 4, 23);

