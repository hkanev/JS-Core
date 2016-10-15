function sort(words){
    words.sort(function(a,b){
        if(a.length!=b.length){
            return a.length-b.length;
        }
        else{
            return a.localeCompare(b)
        }
    });

       console.log(words.join("\n"))
}
//sort(['alpha','beta','gamma']);
sort(['test','Deny','omen','Default']);

//sort(['Isacc','Theodor','Jack','Harrison','George']);