function countLetter(input){
    let word = input[0];
    let letter = input[1];
    let count = 0;
    for(let i = 0; i<word.length; i++){
        if(word[i]==letter)
        {
            count ++;
        }
    }
    console.log(count);
}

countLetter(['hello', 'l']);