function solve(input){
    let coins = 0;
    let gold = 0;
    let silver = 0;
    let bronze = 0;

    for (let i = 0; i < input.length; i++) {
        let pair = input[i];
        let coin = pair.split(' ')[0];
        let quantity = Number(pair.split(' ')[1]);

        if(quantity%1==0 && coin.toLowerCase()=='coin' && quantity>0){
                coins += quantity;
        }
    }

    while(coins>=100){
        coins -=100;
        gold++;
    }

    while(coins>=10){
        coins-=10;
        silver++;
    }

    while(coins>0){
        coins--;
        bronze++;
    }
    console.log(`gold : ${gold}`);
    console.log(`silver : ${silver}`);
    console.log(`bronze : ${bronze}`);

}

solve(
['Coin 1',
'COIN 2',
'coin 5',
'coin 10',
'coin 20',
'coin 50',
'coin 100',
'coin 200',
'coin 500',
'cigars 1']
   //['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']
   // ['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1']
    //['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']
);