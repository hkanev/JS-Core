function Calc([a,b,operator]){
     a = Number(a);
     b= Number(b);
    if(operator==`+`)
        console.log(a+b);
    if(operator==`-`)
        console.log(a-b);
    if(operator==`*`)
        console.log(a*b);
    if(operator==`/`)
        console.log(a/b);
}

Calc(['2','3','+']);