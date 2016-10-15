function OddNumber(input) {
    let number = input[0];

    for(let i = 0; i <= number; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}

OddNumber(['5']);