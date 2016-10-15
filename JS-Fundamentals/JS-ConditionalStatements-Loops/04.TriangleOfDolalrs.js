function triangleOfDollars(input){
    let number = input[0];
    let line = '';
        for(let row=1; row <= number; row++ ) {
            console.log('$'.repeat(row));
        }
}

triangleOfDollars(['5']);