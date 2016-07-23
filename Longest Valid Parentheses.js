/**
 * 从后向前计算，dp[i]代表下标i开始到字符串结尾最长括号长度
 * s[i]则是下标i在字符串对应的括号，
 * 如果当前s[i]当前是左括号，并且其对应的的长度的坐标i+dp[i+1]+1是右括号，则d[i] = d[i+1] + 2，如果不是则为0
 * 但是如果是右括号的话，不会存在，所以为0
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    //1.初始化数组
    var dp = new Array(s.length);
    for (var i = 0; i < dp.length; i++) {
        dp[i] = 0;
    }

    //2.动态规划
    var maxLength = 0;
    for (i = s.length - 2; i >= 0; i--) {
        if (s.charAt(i) === '(') {
            var end = i + dp[i + 1] + 1;
            if (end < s.length && s.charAt(end) === ')') {
                dp[i] = dp[i+1] + 2;
                // 加上之前的个数
                if (end + 1 < s.length) {
                    dp[i] += dp[end + 1];
                }
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
};

/**
 * 维护一个栈，栈底的值为上次匹配失败的位置
 * 依次扫描字符，若为左括号，则加入，若为右括号，不为空的情况下进行判断是否栈顶为左括号，为空则加入
 * @param s
 * @returns {number}
 */
var longestValidParentheses2 = function(s) {
    var n = s.length, longest = 0;
    var stack = [];

    // 遇到相匹配的则pop，所以最后剩下的就是不能匹配的
    for (var i = 0; i < n; i++) {
        if (s.charAt(i) === '(')
            stack.push(i);
        else {
            // 如果不为空
            if (stack.length !== 0) {
                if (s.charAt(stack[stack.length-1]) === '(') stack.pop();
                else stack.push(i);
            }
            // 如果为空
            else stack.push(i);
        }
    }

    // 说明全部都是符合的
    if (stack.length === 0) longest = n;
    else {
        var a = n, b = 0;
        while (stack.length !== 0) {
            b = stack[stack.length-1];
            stack.pop();
            longest = Math.max(longest, a - b - 1);
            a = b;
        }
        longest = Math.max(longest, a);
    }
    return longest;
};

/**
 * 思想和方法2相同
 * 用记录下为空后第一次添加右括号的坐标，栈添加进来的都是上次添加的左括号的下标
 * 和2不同的是，在遍历的过程中就进行比较最大长度
 * @param s
 * @returns {n|*}
 */
var longestValidParentheses3 = function(s) {
    var stack = [];
    var max = 0, left = -1;

    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(')
            stack.push(i);
        else {
            // 如果为空
            if (stack.length === 0) left = i;
            else {
                stack.pop();
                if (stack.length === 0)
                    max = Math.max(max, i - left);
                else max = Math.max(max, i - stack[stack.length-1]);
            }
        }
    }

    return max;
};

var str = ")((())";
var result = longestValidParentheses3(str);
console.log(result);