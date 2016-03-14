/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var number = x+"";
    if (x==0) {
        return x;
    }
    else if (x>0) {
        if (number.length >= 9 && number.split("").reverse().join("")>"214748365") {
            return 0;
        }
        return parseInt(number.split("").reverse().join(""));
    }
    else {
        if (number.length >= 10 && (number.substring(1)).split("").reverse().join("")>"214748365") {
            return 0;
        }
        return parseInt("-" + (number.substring(1)).split("").reverse().join(""));
    }

};