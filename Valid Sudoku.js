/**
 * @param {character[][]} board
 * @return {boolean}
 */

var board1 = new Array(9);
var board2 = new Array(9);
var board3 = new Array(9);

for (var i = 0;i < 9;i++) {
    var temp = new Array(0,0,0,0,0,0,0,0,0);
    board1[i] = temp;
    board2[i] = temp;
    board3[i] = temp;
}

var isValidSudoku = function(board) {
    for(var i = 0;i < 9; i++){
        for(var j = 0;j < 9;j++){
            if(board[i][j]!='.'){
                var num = parseInt(board[i][j] - '1');
                var k = Math.round(i/3*3 + j/3);
                if(board1[i][num]!==0 || board2[j][num]!==0 || board3[k][num]!==0){
                    return false;
                }
                board1[i][num] = board2[j][num] = board3[k][num] = 1;
            }
        }
    }
    return true;
};