function occurances([text, word]){
    let count = 0;
    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern.toLowerCase(),'g');
    let match = regex.exec(text.toLowerCase());
    while(match){
        count++;
        match=regex.exec(text.toLowerCase());
    }
    console.log(count);
}

occurances(['The waterfall was so high, that the child couldn’t see its peak.','the']);
occurances(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there']);