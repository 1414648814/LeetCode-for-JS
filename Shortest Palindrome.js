/**
 * @param {string} s
 * @return {string}
 */

/**
 * 思路：找出从开始到尾部出现最长的回文串，（其中尾部不断递减）
 * 则尾部后面的则是需要填补的，只需要将其反转再加到原字符串上就行
 */
var shortestPalindrome = function(s) {
    if (s.length == 0 || s == "") return s;
    var low = 0, high = s.length;
    var result = "";
    while (low < high) {
        if (isPalindrome(s.slice(low, high))) {
            break;
        }
        high --;
    }
    var pre = s.substring(high).split("").reverse().join("");
    result = pre.concat(s);
    return result;

    function isPalindrome (str) {
        var l = 0, r = str.length - 1;
        for (; l < r; l++, r--) {
            if (str.charAt(l) !== str.charAt(r)) {
                return false;
            }
        }
        return true;
    }
};

var string = "";
var result = shortestPalindrome(string);
console.log(result);