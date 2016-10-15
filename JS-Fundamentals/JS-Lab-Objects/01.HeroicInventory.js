function solve(input){
   let heroData = [];
    for (let i = 0; i < input.length; i++) {
        let currentArgument = input[i].split(" / ");

        let currentHeroName = currentArgument[0];
        let currentHeroLevel = Number(currentArgument[1]);
        let currentHeroItems = [];
        if(currentArgument.length>2)
        currentHeroItems = currentArgument[2].split(", ");
        let hero = {
            name:  currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}

solve(['Isacc / 25 / Apple, GravityGun']);