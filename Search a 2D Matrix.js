/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * 思路1:先找出所在的行，再找出所在的列
 * @param matrix
 * @param target
 * @returns {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;

    if (m === 0 || target === null)
        return false;

    var low = 0;
    var high = m-1;
    var middle = 0;
    while (low <= high)
    {
        middle = Math.floor((low + high)/2);
        if (matrix[middle][0] === target)
            return true;
        else if (matrix[middle][0] > target)
            high = middle - 1;
        else
        {
            if (middle == m-1 || matrix[middle+1][0] > target)
                break;
            else
                low = middle + 1;
        }
    }

    low = 1;
    high = n-1;
    var i;
    for (;low <= high;)
    {
        i = Math.floor((low + high)/2);
        if (matrix[middle][i] === target)
            return true;
        else if (matrix[middle][i] > target)
            high = i - 1;
        else
            low = i + 1;
    }

    return false;
};

/**
 * 思路2:通过i记录所在行，j记录所在的列，这两个参数标记处目标的位置
 * @param matrix
 * @param target
 * @returns {boolean}
 */
var searchMatrix2 = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var i = m-1,j = 0;

    while (i >= 0 && j < n)
    {
        if (matrix[i][j] === target)
            return true;
        else if (matrix[i][j] < target)
            j++;
        else
            i--;
    }
    return false;
}

var array = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

var find = searchMatrix2(array,11);
console.log(find);
