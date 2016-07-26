/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length == 0) return 0;
    if (s.charAt(0) == '0') return 0;
    if (s.length == 1) return s.charAt(0) > '0' ? 1 : 0;
    var dp = new Array(s.length + 1);
    dp[0] = dp[1] = 1;
    for (var i = 2; i <= s.length; i++) {
        dp[i] = dp[i-1];
        // 10的倍数
        if (s.charAt(i-1) == '0') {
            if (s.charAt(i-2) == '1' || s.charAt(i-2) == '2')
                dp[i] = dp[i-2];
            else
                return 0;
        }
        //开始为0
        else if (s.charAt(i-2) == '0') {
            dp[i] = dp[i-1];
            continue;
        }
        //10多和20多
        else if (s.charAt(i-2) < '2' || (s.charAt(i-2) == '2' && s.charAt(i-1) < '7'))
            dp[i] += dp[i-2];
    }
    return dp[s.length];
};