function sumTown(data){
    let sums = {};

    for (let i = 0; i < data.length; i+=2) {
        let town = data[i];
        let income = Number(data[i+1]);
        if(!sums[town]){
            sums[town]=0;
        }
        sums[town] += income;
    }
    console.log(JSON.stringify(sums));
}

sumTown(['Sofia','20', 'Varna','10', 'Sofia','5'])
