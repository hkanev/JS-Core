function evenPositions(arr){
    arr = arr.filter((x,i)=> i%2 ==0);
    console.log(arr.join(" "));
}