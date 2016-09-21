function FilterAge(input){
    let minAge = Number(input[0]);
    let nameA = input[1];
    let ageA = input[2];
    let nameB = input[3];
    let ageB = input[4];

    let personA = {name:nameA, age:Number(ageA)};
    let personB = {name:nameB, age:Number(ageB)};

    if( personA.age >= minAge)
        console.log(personA);
    if( personB.age >= minAge)
        console.log(personB);

}
