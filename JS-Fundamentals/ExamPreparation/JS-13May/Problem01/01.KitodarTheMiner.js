function solve(input){
    let ores = new Map();
    ores.set('silver',0);
    ores.set('gold',0);
    ores.set('diamonds',0);
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' - ');
        let splitedline = line[1].split(":");
        let ore = splitedline[0].replace(' ','');
        let splitline = line[0].split(" ");
        let quantity = 0;
        if(splitedline.length>1){
             quantity = Number(splitedline[1]);
             if(splitline[0]=='mine'){
                if(ore=='silver' || ore=='gold' || ore=='diamonds'){
                    ores.set(ore,ores.get(ore)+Number(quantity))
                }
            }
        }
    }

    console.log(`*Silver: ${ores.get('silver')}`);
    console.log(`*Gold: ${ores.get('gold')}`);
    console.log(`*Diamonds: ${ores.get('diamonds')}`);
}

solve([
    'mine mina - gold - 5',
    'mine mina - silver - 5',
    'mine mina - diamonds : 5',
    'mine mina - gold:5'
]);