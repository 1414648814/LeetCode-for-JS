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
