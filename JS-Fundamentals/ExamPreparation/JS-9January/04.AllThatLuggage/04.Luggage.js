function solve(input) {
    let sort = input.pop();
    let luggage = {};

    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(/[\.\*]{2,200}|\*/);
        let person = arr[0];
        let typeLuggage = arr[1];
        let isFood = arr[2];
        let isDrink = arr[3];
        let isFragile = arr[4];
        let weight = Number(arr[5]);
        let transport = arr[6];
        let type = "other";

        if (isFood=="true") {
            type = "food";
        }
        if (isDrink=="true") {
            type = "drink";
        }

        if(!(person in luggage)) {
            luggage[person] = {};
        }

        luggage[person][typeLuggage] = {'kg':weight, 'fragile':isFragile, 'type': type, 'transferredWith' : weight};

    }

    if(sort=="strict"){
        console.log(JSON.stringify(luggage));
    } else if(sort=="")

}

solve([
    'Yana Slavcheva...*....clothes*false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'strict'
]);