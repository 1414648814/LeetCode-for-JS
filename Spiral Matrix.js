/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var result = [];
    if(matrix.length === 0|| matrix === null){
        return result;
    }
    var row = matrix.length;
    var col = matrix[0].length;
    helper(0,0,row,col);

    function helper(x,y,row,col){
        if(row <= 0 || col <= 0){
            return;
        }

        //first line
        for(var i = 0;i < col;i++){
            result.push(matrix[x][y + i]);
        }

        //right col
        for(var i = 1;i < row - 1;i++){
            result.push(matrix[x+i][y + col - 1]);
        }

        //last line
        if(row > 1){
            for(var i = col-1;i >= 0;i--){
                result.push(matrix[x + row -1][y + i]);
            }
        }

        //left col
        if(col > 1){
            for(var i = row-2;i > 0;i--){
                result.push(matrix[x+i][y]);
            }
        }

        helper(x+1,y+1,row-2,col-2);
    }
    return result;
};

var array = [[3],[2]];
var reuslt = spiralOrder(array);
console.log(reuslt);