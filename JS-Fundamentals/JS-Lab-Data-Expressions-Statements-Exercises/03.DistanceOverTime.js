function DistanceOverTime ([speedA, speedB, time]){
    let distanceA = (speedA*1000/3600) * time ;
    let distanceB = (speedB *1000/3600)* time;
    let distanceDelta = Math.abs(distanceA-distanceB);
    console.log(distanceDelta)
}

DistanceOverTime(['11','10','120'])