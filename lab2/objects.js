function fn(){
    const obj1 = {Name: "Vsevolod"};
    let obj2 = {Name: "Vsevolod"};
    
    obj1.Name = "Dmitrii";
    obj2.Name = "Ivan";

    obj2 = {Name: "Volodimir"};
}

function createUser(name, city){
    let user = {Name: name, City: city};
    return user;
}

console.log(createUser("Marcus Aurelius", "Roma"))
