function townToJSON (towns){
    let townsArr = [];
    for(let town of towns.slice(1)){
        let [empty,name,lat,lng] = town.split(/\s*\|\s*/);
        let obj = {
            Town: name,
            Latitude: Number(lat),
            Longitude: Number(lng)
        }
        townsArr.push(obj)
    }
    console.log(JSON.stringify(townsArr));
}

townToJSON([
    '| Town | Latitude | Longitude |',
   '| Sofia | 42.696552 | 23.32601 |',
   '| Beijing | 39.913818 | 116.363625 |'
]);