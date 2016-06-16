
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    var length1 = s1.length;
    var length2 = s2.length;
    var length3 = s3.length;

    if(length1 + length2 !== length3)
        return false;

    //1.初始化数组
    var result = [];
    for (var i = 0;i <= length1;i++)
    {
        var temp = new Array(length2 + 1);
        result.push(temp);
    }
    for (var i = 0;i <= length1;i++){
        for (var j = 0;j <= length2;j++)
        {
            result[i][j] = 0;
        }
    }

    result[0][0] = 1;

    //2.计算第一行的值
    for (var j = 1;j <= length2;j++)
    {
        if (s2[j - 1] === s3[j - 1])
            result[0][j] = 1;
        else
            break;
    }

    //3.计算第一列的值
    for (var i = 1;i <= length1;i++)
    {
        if (s1[i - 1] === s3[i - 1])
            result[i][0] = 1;
        else
            break;
    }

    //4.计算除了第一行和第一列的值
    for (var i = 1;i <= length1;i++)
    {
        for (var j = 1;j <= length2;j++)
        {
            var n = i + j;
            if (s1[i - 1] === s3[n - 1])
                result[i][j] = result[i - 1][j] || result[i][j];
            if (s2[j - 1] === s3[n - 1])
                result[i][j] = result[i][j - 1] || result[i][j];
            console.log("----------------");
            console.log(result);
        }
    }

    return result[length1][length2] ? true : false;
};

var s1 = "db";
var s2 = "b";
var s3 = "cbb";
var result = isInterleave(s1,s2,s3);
console.log(result);