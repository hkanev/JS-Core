function Extract(arr){
    let max = Number(arr[0]);
    console.log(max);
    for (let i = 1; i < arr.length; i++) {
        if(max<=Number(arr[i])){
            max=arr[i];
            console.log(max);
        }
    }
}

Extract(['1','3','8','4','10','12','3','2','24']);
