function Rounding([number, n]){
    [number, n] = [number, n].map(Number);
    if(n>15) n=15;
    let denominator = math.pow(10, n);

    let result = math.round(myVar * denominator) / denominator;

    console.log(result);
}