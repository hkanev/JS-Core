function GradsToRadians([grad]){
    let result =  0.9 * grad;
    if(result<0){
        result = 360 + result;
    }
    if(result>360){
        result = result % 360;
    }
    console.log(result);
}

GradsToRadians([850]);