function solve(input){
    let cars = new Map();
    for (let i = 0; i < input.length; i++) {
        let carsData = input[i].split(' | ');
        let car = carsData[0];
        let model = carsData[1];
        let quantity = Number(carsData[2]);

        if(!cars.has(car)){
            cars.set(car,new Map());
        }

        if(!cars.get(car).has(model)){
            cars.get(car).set(model,0)
        }

        cars.get(car).set(model,cars.get(car).get(model)+quantity);

    }

    for([key,val] of cars){
       console.log(key);
        for([model,quantity] of val){
           console.log(`###${model} -> ${quantity}`);
        }
    }
}

solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]);