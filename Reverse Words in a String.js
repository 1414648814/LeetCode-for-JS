/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var result = [];
    if (str === null || str.length === 0)
        return "";
    var words = str.match(/\S+/g);
    // 如果words只包含空格
    if (words === null)
        return "";

    // 将数组中的各个单词进行反转
    for (var i = 0; i < words.length; i++) {
        var last = words.pop();
        words.splice(i, 0, last);
    }
    return words.join(" ");
};

var reverseWords2 = function(str) {
    str = str.trim();

    if (str.length === 0 || !str) return "";
    var s = str.split(" ").reverse();
    var result = "";
    // 去除单词中间可能存在的空白
    for (var i = 0; i < s.length; i++) {
        if (s[i].localeCompare("") !== 0)
            result = result + s[i] + " ";
    }
    result = result.trim();
    return result;
};

var reverseWords3 = function(str) {
    var b = str.split(" ");
    var s = "";
    for (var i = b.length - 1; i >= 0; i--) {
        if (b[i] !== "")
            s += b[i] + " ";
    }
    // 消除从右侧起所遇到的所有空白格
    return s.trimRight();
};

var string = "i'm a bad boy.";
var result = reverseWords3(string);
console.log(result);