/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/**

 利用矩阵的第一行和第一列来作为辅助空间使用，不用开辟新的存储空间，
 1.先确定第一行和第一列是否需要清零
 即，看看第一行中是否有0，记下来。也同时记下来第一列中有没有0。

 2.扫描剩下的矩阵元素，如果遇到了0，就将对应的第一行和第一列上的元素赋值为0
 这里不用担心会将本来第一行或第一列的1改成了0，因为这些值最后注定要成为0的，比如matrix[i][j]==0，那么matrix[i][0]处在第i行，matrix[0][j]处于第j列，最后都要设置为0的。

 3.根据第一行和第一列的信息，已经可以将剩下的矩阵元素赋值为结果所需的值了即，拿第一行为例，如果扫描到一个0，就将这一列都清0.

 4.根据1中确定的状态，处理第一行和第一列。
 如果最开始得到的第一行中有0的话，就整行清零。同理对列进行处理。
 
 */
var setZeroes = function(matrix) {

    var alength = matrix.length;
    var blength = matrix[0].length;

    var firstrow = false;
    var firstcol = false;
    //处理第一行和第一列的情况
    for(var i = 0;i < alength;i++)
    {
        if(!matrix[i][0])
        {
            firstcol = true;
        }
    }
    for(var j = 0;j < blength;j++)
    {
        if(!matrix[0][j]){
            firstrow = true;
        }
    }

    //判断
    for(var i = 1;i < alength;i++)
    {
        for(var j = 1;j < blength;j++)
        {
            if(!matrix[i][j])
            {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    //设置为0
    for(var i = 1;i < alength;i++)
    {
        if(!matrix[i][0])
        {
            for(var j = 1;j < blength;j++){
                matrix[i][j] = 0;
            }
        }
    }
    for(var j = 1;j < blength;j++)
    {
        if(!matrix[0][j])
        {
            for(var i = 1;i < alength;i++)
            {
                matrix[i][j] = 0;
            }
        }
    }

    //设置第一行和第一列的为0
    if(firstrow)
    {
        for(var j = 0;j < blength;j++)
        {
            matrix[0][j] = 0;
        }
    }
    if(firstcol)
    {
        for(var i = 0;i < alength;i++)
        {
            matrix[i][0] = 0;
        }
    }
};