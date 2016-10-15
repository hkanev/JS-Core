function rotate (arr){
    let rotations = Number(arr[arr.length-1]);
    arr.pop();
    for (let i = 0; i < rotations; i++) {
        let numb = arr.splice(arr.length-1);
        arr.unshift(numb);
    }
    console.log(arr.join(" "));
}
rotate(['1','2','3','4','2']);
