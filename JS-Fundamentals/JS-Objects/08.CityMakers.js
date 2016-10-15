function solve(input) {
    let townsWithProducts = new Map();
    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(" -> ");
        let sales = data[2].split(" : ");
        let town = data[0];
        let product = data[1];
        let amount = sales[0];
        let price = sales[1];

        if(!townsWithProducts.has(town)){
            townsWithProducts.set(town,new Map());
        }

        if(!townsWithProducts.get(town).has(product)){
            townsWithProducts.get(town).set(product,0)
        }

        let income =  amount * price;
        townsWithProducts.get(town).set(product,income);

        }
    for(let [town,product] of townsWithProducts){
        console.log('Town - ' + town)
        for(let [product, income] of townsWithProducts.get(town)){
            console.log('$$$'+product + ' : ' + income)
        }
    }
}

solve([
   'Sofia -> Laptops HP -> 200 : 2000',
   'Sofia -> Raspberry -> 200000 : 1500',
   'Sofia -> Audi Q7 -> 200 : 100000',
   'Montana -> Portokals -> 200000 : 1',
   'Montana -> Qgodas -> 20000 : 0.2',
   'Montana -> Chereshas -> 1000 : 0.3'
]);
