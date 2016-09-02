/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var length = strs.length;
    var min_len = 100000;
    var substring = "";
    if (length == 0) {
        return "";
    }
    else if (length == 1) {
        return strs[0];
    }
    substring = strs[0];
    for (var i = 1;i < length;i++) {
        if (strs[i].length > min_len)
            continue;
        else if (strs[i].length < min_len) {
            min_len = strs[i].length;
            substring = strs[i];
        }
    }
    if (!min_len) {
        return "";
    }
    for (var i = 0;i < length;i++) {
        var j = 0;
        for (j = 0;j < min_len;j++) {
            if (strs[i].charAt(j) != substring.charAt(j)) {
                break;
            }
        }
        substring = substring.substring(0,j);
    }
    return substring;
};
