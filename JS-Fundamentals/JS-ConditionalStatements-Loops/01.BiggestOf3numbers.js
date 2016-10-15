function BiggestOf3Numbers([a,b,c]){
    [a,b,c] = [a,b,c].map(Number);

    if(a>b && a>c){
        console.log(a);
    }
    else if(b>c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}

BiggestOf3Numbers(['5','-2','7'])