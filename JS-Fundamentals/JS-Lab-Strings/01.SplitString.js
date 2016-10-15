function split([text,delimiter]){
   let words = text.split(delimiter);
    console.log(words.join("\n"));
}

split(['One-Two-Three-Four-Five','-']);