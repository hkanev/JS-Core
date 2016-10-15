function calcResults(input){
    let targetCourse = input[input.length-1];
    input.pop();
    let avgExamPoints = 0;
    let course = "";
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');
        line = line.filter(s => s!='');

        let name = line[0];
        course = line[1];
        let examPoints = Number(line[2]);
        let courseBonus = Number(line[3]);
        if(course==targetCourse) {
            count++;
            avgExamPoints += examPoints;
        }
            if(examPoints<100){
                console.log(`${name} failed at "${course}"`);
            }
            else{
                let coursePoints = examPoints * 0.20;
                coursePoints = Math.round((coursePoints+courseBonus)*10)/10;
                let grade = (((coursePoints/80)*4)+2);
                if(Number(grade)>6) {
                    grade = 6;
                }
                grade = grade.toFixed(2);
                console.log(`${name}: Exam - "${course}"; Points - ${coursePoints}; Grade - ${grade}`);
            }

    }
    let avg = Math.round((avgExamPoints/count)*10)/10;
    console.log(`"${course}" average points -> ${avg}`);
}

calcResults([
    'Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
]);