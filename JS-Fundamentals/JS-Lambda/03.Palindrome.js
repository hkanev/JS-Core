function Palindrome([word]){
    let backwards = '';
    for(let i = word.length-1; i >=0; i--){
        backwards += word[i];
    }
    if(backwards==word){
        console.log("true");
    }
    else {
        console.log("false");
    }
}

Palindrome(['racecar']);