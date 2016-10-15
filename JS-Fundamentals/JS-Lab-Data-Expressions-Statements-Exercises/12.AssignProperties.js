function AssignProperties(input){

    let obj = {};

    let name = input[0];
    obj[name] = input[1]
    let age =  input[2];
    obj[age] = input[3]
    let gender = input[4];
    obj[gender] = input[5]

    console.log(obj);
}

AssignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);