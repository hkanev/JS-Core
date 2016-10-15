function draw([n]){
    let str = '';
    for(let i = 1; i<=n; i++){
        str += '* '.repeat(n);
        str += `\n`;
    }
    console.log(str);
}

draw([5]);