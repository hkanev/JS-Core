function startIsEqual([text, comparor]){
    let words = text.split(" ");
    if(words[0]==comparor){
        console.log("true")
    }
    else{
        console.log("false");
    }
}

startIsEqual(['How is made',"How"]);