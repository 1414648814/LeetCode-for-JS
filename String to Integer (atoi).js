/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var length = str.length;
    var result = 0;
    var substring = "";
    var isPositive;
    var i = 0,temp = 1;
    if (length == 0) return 0;
    if (str == "0") return 0;
    for (i = 0; i < length; i++) {
        if ((str.charAt(i) >= 'a' && str.charAt(i) <= 'z') || (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')) {
            str = str.substring(0,i);
            break;
        }
    }
    length = str.length;
    if (str.charAt(0) == ' ') {
        for (i = 0; i < length; i++) {
            if (str.charAt(i)!=' ' && str.charAt(i)!='0') {
                str = str.substring(i);
                break;
            }
        }
    }
    length = str.length;
    isPositive = str.charAt(0) == '-'?false:true;
    for (i = 1;i < length; i++) {
        if (str.charAt(i) == '+' || str.charAt(i) == '-') {
            return 0;
        }
    }
    if (!isPositive) {
        if (length == 1) {
            return 0;
        }
        substring = str.substring(1);
        for (i = 0; i < substring.length; i++) {
            if (substring.charAt(i) == ' ') {
                substring = substring.substring(0,i);
                break;
            }
        }
        for (i = substring.length - 1,temp = 1; i >= 0; i--,temp*=10) {
            result += substring.charAt(i) * temp;
        }
        if (substring.length >= 10 && result >= 2147483648) {
            result = 2147483648;
        }
        return 0 - result;
    }
    else {
        if (str.charAt(0) == '+') {
            if (length == 1) {
                return 0;
            }
            else {
                substring = str.substring(1);
                for (i = 0; i < substring.length; i++) {
                    if (substring.charAt(i) == ' ') {
                        substring = substring.substring(0,i);
                        break;
                    }
                }
                for (i = substring.length - 1,temp = 1; i >= 0; i--,temp*=10) {
                    result += substring.charAt(i) * temp;
                }
                if (substring.length >= 10 && result >= 2147483648) {
                    result = 2147483647;
                }
                return result;
            }
        }
        for (i = 0; i < length; i++) {
            if (str.charAt(i) == ' ') {
                str = str.substring(0,i);
                break;
            }
        }
        length = str.length;
        for (i = length - 1,temp = 1; i >= 0; i--,temp*=10) {
            result += str.charAt(i) * temp;
        }
        if (length >= 10 && result >= 2147483648) {
            result = 2147483647;
        }
        return result;
    }

};


var result = myAtoi("123  456");
print(result);
