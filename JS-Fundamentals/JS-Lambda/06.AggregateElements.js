function calc(input){
    let sum = 0;
    let invSum =0;
    let concat = "";
    for(let i = 0; i < input.length; i++){
         sum = sum + Number(input[i]);
         invSum += 1/input[i];
         input.map(String);
         concat += input[i];
    }

    console.log(sum);
    console.log(invSum);
    console.log(concat);
}

calc(['2','4','3']);