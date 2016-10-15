function main(input){
    let  bombBunnies = input.pop().split(" ");

    let matrix = [];

    let snowballDmg = 0;
    let snowBallKills = 0;
    
    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(" ").map((x)=>Number(x));
        matrix.push(currentRow)
        
    }

    for(let i = 0; i < bombBunnies.length; i++){
        let currentBombBunny = bombBunnies[i].split(",").map(Number);
        let bombRow = currentBombBunny[0];
        let bombCol = currentBombBunny[1];
        let bombDmg =  matrix[bombRow][bombCol];

        snowballDmg += bombDmg;
        snowBallKills++;

        explode(matrix, bombRow, bombCol, bombDmg);
    }


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
        let currentCell = matrix[row][col];

            if(currentCell>0){
                snowballDmg+= currentCell;
                snowBallKills++;
            }
        }
    }

    console.log(snowballDmg);
    console.log(snowBallKills);

    function isInMatrix(matrix, row, col){
        if((row>=0 && row<matrix.length) && (col>=0 && row<matrix.length)){
            return true;
        }
        return false;
    }

    function explode(matrix, bombRow, bombColum, bombDamage){
        for(let row = bombRow-1; row<=bombRow +1; row++){
            for (let col = bombColum - 1; col <= bombColum+1; col++){
                if(isInMatrix(matrix,row,col)){
                    matrix[row][col] -= bombColum;
                }
            }
        }
            return matrix;
    }
}

main([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);