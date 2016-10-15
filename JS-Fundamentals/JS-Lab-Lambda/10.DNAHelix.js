function DNAHelix([number]){
    let sequence = 'ATCGTTAGGG';
    let rows = Number(number);
    let sequenceIndex = 0;

    for(let i=0;i<rows;i++){
        let currentRow = i % 4;
        if(currentRow === 0){
            console.log(`**${sequence[sequenceIndex++ % sequence.length]}${sequence[sequenceIndex++ % sequence.length]}**`);
        }
        else if(currentRow == 1 || currentRow ==3){
            console.log(`*${sequence[sequenceIndex++ % sequence.length]}--${sequence[sequenceIndex++ % sequence.length]}*`)
        }
        else{
            console.log(`${sequence[sequenceIndex++ % sequence.length]}----${sequence[sequenceIndex++ % sequence.length]}`)
        }
    }
}
DNAHelix(['10']);
