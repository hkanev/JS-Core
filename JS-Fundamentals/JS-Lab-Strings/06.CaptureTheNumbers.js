function capture(arr) {
    let text = arr.join('');
    let regex = /\d+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(' '));
}


capture(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);




