function solve(input){
    let exam = {};
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(/\s+-\s+|-/);
        let name = line[0];
        let arr = line[1].split(/\s+:\s+|:/);
        let subject = arr[0];
        let score = Number(arr[1].replace(' ',''));
        let makeupExams = 0;

        if(score<0 || score>400){
            continue;
        }

        if(!(subject in exam)) {
            exam[subject] = {};
        }

        exam[subject] ={'name': name, 'result': score, 'makeUpExams': makeupExams}
    }

    let scoreSort = {};
    Object.keys(exam).forEach(function(key) {
        scoreSort[key] = {};
        var a = Object.keys(exam, [key]).sort(function (a, b) {
            return exam[key][a] - exam[key][b];
        });
        a.forEach(function (value) {
            scoreSort[key][value] = exam[key][value];
        })
    });
    console.log(JSON.stringify(scoreSort));

}

solve([
    'Peter Jackson - Java : 350',
    'Jane - JavaScript :           200',
    'Jane     -    JavaScript :     400',
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Simon Cowell - PHP : 200'
]);
