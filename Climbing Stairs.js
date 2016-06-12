/**
 * @param {number} n
 * @return {number}
 */
/**
 * 思路 ： 将后面相加的值和前面的值进行替换，一直到n
  * @param n
 * @returns {number}
 */
var climbStairs = function(n) {
    var a = 0;
    var b = 1;
    var sum = 0;
    for(var i = 0;i < n;i++)
    {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;

};

//动态规划
var climbStairs2 = function(n) {
    var result = new Array(3);
    for(var i = 0;i < 3;i++)
        result[i] = 0;
    result[0] = 1;
    result[1] = 1;

    for(var i = 2;i <= n;i++)
    {
        result[i%3] = result[(i-1)%3] + result[(i-2)%3];
    }
    return result[n%3];

}

var n = 3;
var result = climbStairs2(n);
console.log(result);
