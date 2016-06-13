/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    //1.边界判断
    if (m === 0 || n === 0)
        return 0;

    //2.初始化路径和数组
    var path = [];
    for (var i = 0;i < m;i++)
    {
        var tmp = [];
        for (var j = 0;j < n;j++)
        {
            tmp[j] = 0;
        }
        path[i] = tmp;
    }
    path[0][0] = grid[0][0];

    //3.计算第一列
    for (var i = 1;i < m;i++)
        path[i][0] = path[i-1][0] + grid[i][0];

    //4.计算第一行
    for (var j = 1;j < n;j++)
        path[0][j] = path[0][j-1] + grid[0][j];

    //5.根据前面的行列计算和
    for (var i = 1;i < m;i++)
        for(var j = 1;j < n;j++)
            path[i][j] = Math.min(path[i-1][j],path[i][j-1]) + grid[i][j];

    return path[m-1][n-1];
};

var grid = [[1]];
var result = minPathSum(grid);
console.log(result);