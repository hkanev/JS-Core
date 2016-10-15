function radar([speed,zone]){
    let limit = getLimit(zone);
    let interfaction = getInfraction(speed,limit);
    if(interfaction){
        console.log(interfaction);
    }
    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    }

    function getInfraction (speed,limit){
        let overSpeed = speed - limit;
        if(overSpeed<=0) {
            return false;
        }
        else if(overSpeed<=20){
            console.log("speeding");
        }
        else if(overSpeed<=40){
            console.log("excessive speeding");
        }
        else if(overSpeed>40){
            console.log("reckless driving");
        }
    }
}

radar(['120','interstate']);