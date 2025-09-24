let users1 = [{name: "Vova", phone: "+380123456789"}, {name: "Dima", phone: "+380416228361"}, {name: "Petya", phone: "+380614952644"},]
let users2 = {"Vova" : "+380123456789", "Dima" : "+380416228361", "Petya" : "+380614952644"};

function findPhoneByName(name){
    for(item of users1){
        if(name == item.name){
            console.log(item.phone)
        }
    }
}

function findPhoneByName2(name){
    console.log(users2[name]);
}

findPhoneByName("Dima");
findPhoneByName2("Vova");