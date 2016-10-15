function modifyAvarage ([number]){
    let sum = 0;
    for(let i=0; i<number.length; i++){
         sum += Number(number[i]);
    }


    while(sum/number.length<=5){
        sum = 0;
        number = number + 9;
        for(let i=0; i<number.length; i++){
            sum += Number(number[i]);
        }
    }

    console.log(number);
}
modifyAvarage(['101']);