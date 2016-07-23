/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// 数组i，j代表的是，字符串t的前j个字符在字符串前i个字符里面出现的个数
var numDistinct = function(s, t) {
    // 1.初始化数组，并且将第一行数据置为1
    var dp = new Array(s.length + 1);
    for (var i = 0; i < dp.length; i++) {
        var newArr = new Array(t.length + 1);
        for (var j = 0; j < newArr.length; j++) {
            if (j == 0) {
                newArr[j] = 1;
            }
            else {
                newArr[j] = 0;
            }
        }
        dp[i] = newArr;
    }

    // 2.处理动态规划
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < t.length; j++) {
            if (s.charAt(i) === t.charAt(j)) {
                dp[i+1][j+1] = dp[i][j] + dp[i][j+1];
            }
            else {
                dp[i+1][j+1] = dp[i][j+1];
            }
        }
    }

    return dp[s.length][t.length];
};

var s = "rabbbit";
var t = "rabbit";
var result = numDistinct(s, t);
console.log(result);