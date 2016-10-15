function solve(input){
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');
            let car = line[0];
            let fuel = line[1];
            let route = Number(line[2]);
            let weight = line[3];

            let fuelConsumption = 10;

            switch (fuel) {
            case "gas":
                fuelConsumption = 1.2 * 10;
                break;
            case "petrol":
                fuelConsumption = 1 * 10;
                break;
            case "diesel":
                fuelConsumption = 0.8 * 10;
                break;
            }
             fuelConsumption += weight * 0.01;
            if (route == 1) {
                extraConsumption = 0.3*fuelConsumption;
                fuelConsumption = 110*(fuelConsumption/100)+(10*(extraConsumption/100));
                console.log(`${car} ${fuel} ${route} ${Math.round((fuelConsumption*10)/10)}`);
            }
            if (route == 2) {
                extraConsumption = 0.3*fuelConsumption;
                fuelConsumption = 95*(fuelConsumption/100)+(30*(extraConsumption/100));
                console.log(`${car} ${fuel} ${route} ${Math.round((fuelConsumption*10)/10)}`);
            }

        }
}

solve([
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54']
);