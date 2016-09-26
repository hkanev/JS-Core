function AssignProperties(input){

    let obj = {};

    let name = "name";
    obj[name] = input[1]
    let age = "age";
    obj[age] = input[3]
    let gander = "gander";
    obj[gander] = input[5]

    console.log(obj);
}

AssignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);