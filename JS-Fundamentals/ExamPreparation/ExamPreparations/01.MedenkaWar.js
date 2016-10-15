function main(input){
    let vitcoreDealtDmg = 0;
    let nascorDealtDmg  = 0;
    let vitcorConsicutiveAttacks = 0;
    let nascorConsicutiveAttacks = 0;
    let vitcorPriviousDmg = Number.NEGATIVE_INFINITY;
    let nascorPriviousDmg = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(" ");

        let countMedenka = Number(line[0]);
        let medenkaType = Number(line[1]);

        if(medenkaType == "white"){
            let medenkaDmg = countMedenka*60;
            if(medenkaDmg == vitcorPriviousDmg){
                vitcorConsicutiveAttacks++
            } else {
                vitcorConsicutiveAttacks = 1;
            }
            if(vitcorConsicutiveAttacks==2){
                vitcoreDealtDmg += medenkaDmg *2.75;
                vitcorPriviousDmg = medenkaDmg * 2.75;
                vitcorConsicutiveAttacks = 0;
            } else {
                vitcoreDealtDmg += medenkaDmg;
                vitcorPriviousDmg = medenkaDmg;
            }

        } else {
            let medenkaDmg = countMedenka*60;
            if(medenkaDmg == nascorPriviousDmg){
                nascorConsicutiveAttacks++
            } else {
                nascorConsicutiveAttacks = 1;
            }
            if(nascorConsicutiveAttacks==5){
                nascoreDealtDmg += medenkaDmg *4.5;
                nascorPriviousDmg = medenkaDmg * 5.5;
                nascorConsicutiveAttacks = 1;
            } else {
                nascoreDealtDmg += medenkaDmg;
                nascorPriviousDmg = medenkaDmg;
            }
        }
            if(vitcoreDealtDmg>nascorDealtDmg){
                console.log('Winner - Vitkor');
                console.log('Damage - ' + vitcoreDealtDmg)
            }
            else {
                console.log('Winner - Naskor');
                console.log('Damage - ' + nascoreDealtDmg)
            }
    }
}