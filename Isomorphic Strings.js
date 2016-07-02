/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    //1.边界条件
    if (s.length === 0 && t.length === 0)
        return true;
    if (s.length !== t.length)
        return false;

    //2.建立数组并初始化
    var sArr = new Array(26),
        tArr = new Array(26);

    //3.判断两个字符串是否相互映射
    for (var i = 0; i < t.length; i++) {
        if (sArr.hasOwnProperty(s[i])) {
            if (sArr[s[i]] !== t[i])
                return false;
        }
        else {
            if (tArr.hasOwnProperty(t[i]))
                return false;
            sArr[s[i]] = t[i];
            tArr[t[i]] = s[i];
        }
    }

    return true;
};

var s = "app";
var t ="opg";
var result = isIsomorphic(s, t);
console.log(result);