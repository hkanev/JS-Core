function calc([x1,y1,x2,y2]){
    distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    distanceX1 = Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2));
    distanceX2 = Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2));

    if(isInt(distanceX1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(isInt(distanceX2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(isInt(distance)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

    function isInt(n) {
        return n % 1 === 0;
    }
}

calc(['2','1','1','1']);




