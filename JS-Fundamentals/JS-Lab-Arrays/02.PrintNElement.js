function print(input){
    let size = Number(input[input.length-1]);
    input.pop();
    input.map(Number);
    let index = size;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if(i==0 && size>0){
            console.log(input[i]);
        }
        else if(index==i){
            console.log(input[i]);
            index +=size;
        }
    }

    console.log(result)
}

print(['5','20','31','4','20','2']);
