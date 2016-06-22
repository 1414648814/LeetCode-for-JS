/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    //1.边界判断
    if (numRows === 0)
    {
        return result;
    }

    for (var i = 0; i < numRows; i++)
    {
        var temp = [];
        for (var j = 0; j < i+1; j++)
        {
            //开头或者结尾都是1
            if (j == 0 || j == i)
                temp.push(1);
            else
                temp.push(result[i-1][j-1] + result[i-1][j]); //公式 [i-1][j-1] + [i-1][j]
        }
        result.push(temp);
    }

    return result;
};

var num = 5;
var result = generate(num);
console.log(result);
