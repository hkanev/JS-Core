function diagonal(input){
    let matrix = input.map(row => row.split(' ').map(Number))
    let left = 0
    let right = 0
    for(let row = 0; row < matrix.length; row++){
        left +=matrix[row][row]
        right += matrix[row][matrix.length-row-1]
    }
    if(left === right){
        let result = new Array(matrix[0].length).fill(left).map(row => new Array(matrix[0].length).fill(left));
        //console.log(result)
        for(let row = 0; row < matrix.length; row++){
            result[row][row] = matrix[row][row]
            result[row][result.length -row-1]= matrix[row][matrix.length-row-1]
        }
        console.log(result.map(row => row.join(' ')).join('\n'));
    } else {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}