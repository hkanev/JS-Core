function solve(input){
    let allowedJumps = Number(input[0]);
    let trackSIze = Number(input[1]);
    let competors = []

    console.log('#'.repeat(trackSIze));
    console.log('#'.repeat(trackSIze));
    for (let i = 2; i < input.length; i++) {
        let name = input[i].split(', ')[0];
        let distance = Number(input[i].split(', ')[1]);
    }
    console.log('#'.repeat(trackSIze));
    console.log('#'.repeat(trackSIze));
}


solve([
    '10',
    '19',
    'angel, 9',
    'Boris, 10',
    'Georgi, 3',
    'Dimitar, 7'
]);