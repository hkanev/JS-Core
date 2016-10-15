function Rounding([number, n]){
    [number, n] = [number, n].map(Number);
    if(n>15) n=15;
    let denominator = Math.pow(10, n);

    let result = Math.round(number * denominator) / denominator;

    console.log(result);
}

Rounding(['3.1415926535897932384626433832795', '2']);