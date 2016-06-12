/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var rows = obstacleGrid.length;
    var cols = obstacleGrid[0].length;
    //1.边界判断
    if(rows === 1 || cols === 1)
        for(var i = 0;i < rows;i++)
            for(var j = 0;j < cols;j++)
                if(obstacleGrid[i][j] === 1)
                    return 0;

    //2.初始化记录的数组
    var path = new Array(cols);
    for(var i = 0;i < path.length;i++)
    {
        path[i] = 0;
    }
    path[0] = 1;

    //3.计算路径的个数
    for(var i = 0;i < rows;i++)
    {
        for(var j = 0;j < cols;j++)
        {
            if(obstacleGrid[i][j] == 1)
            {
                path[j] = 0;
            }
            else
            {
                if(j > 0)
                    path[j] += path[j-1];
            }
        }
    }

    return path[cols - 1];
};

var obstacleGrid = [[0,0],[1,0]];
var result = uniquePathsWithObstacles(obstacleGrid);
console.log(result);