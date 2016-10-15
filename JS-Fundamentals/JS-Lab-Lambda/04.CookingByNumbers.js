function Cook(input){
    let number = input[0];
    for( let i = 1; i < input.length; i++){
        switch (input[i]){
            case 'chop': number /=2; console.log(number); break;
            case 'dice': number = Math.sqrt(number); console.log(number); break;
            case 'spice': number += 1; console.log(number); break;
            case 'bake': number *= 3; console.log(number); break;
            case 'fillet': number = number - 0.2*number;  console.log(number); break;
        }
    }
}

Cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])