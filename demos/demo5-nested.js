
//grid/table (rows and columns)
/*
TIC TAC TOE

. X O
X O .
O . .

*/

grid = [
    ['X', '.', '.'],
    ['.', 'X', '.'],
    ['.', '.', 'X'],
]

// grid[0][2] = 'X'
// grid[1][1] = 'X'
// grid[2][0] = 'X'

//console.log(grid);

//initilize, boolean expression, increment/change
//start; stop; progress
function displayGrid(grid){
    for(r=0; r < grid.length; r++){
        //console.log(grid[r]);
        let row = grid[r]; //copy row at index into local variable
        let output = r +' '
        if(r < 10){
            output += ' '
        }
        for(c=0; c < row.length; c++){
            output += row[c] + ' '
        }
        console.log(output)
    }
}

displayGrid(grid);

function makeGrid(rows, columns){
    let grid = [] //empty rows
    for(r=0; r < rows; r++){
        let row = []
        for(c=0; c < columns; c++){
            row.push('.')
        }
        grid.push(row)    
    }
    return grid    
}
bigGrid = makeGrid(5, 10)
// displayGrid(bigGrid)

function filterGrid(grid){
    for(r=0; r < grid.length; r++){
        for(c=0; c < grid[r].length ; c++){
            if(grid[r][c] === 'X'){
                grid[r][c] = 'O'
            }
        }
    }
    return grid
}
let new_grid = filterGrid(grid)
displayGrid(new_grid)
//Array.push(item) adds an item to an array