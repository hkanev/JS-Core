function DistanceIn3d([x1,y1,z1,x2,y2,z2]){
    let result =  Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)+Math.pow(z2-z1,2),2)
    console.log(result);
}
DistanceIn3d([3.5, 0, 1, 0, 2, -1])