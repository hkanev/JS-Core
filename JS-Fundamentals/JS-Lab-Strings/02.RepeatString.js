function repeat([text,times]){
    let print = "";
    for (let i = 0; i < Number(times); i++) {
        print+=text;
    }
    console.log(print);
}
repeat(['repeat','5']);