/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var length = digits.length;
    for (var i = length-1;i >= 0;i--){
        if(digits[i]+1 >= 10){
            digits[i] = 0;
        }
        else {
            digits[i]++;
            return digits;
        }
    }
    var result = new Array(length+1);
    for(var i = 0;i<length+1;i++)
        result[i] = 0;
    result[0] = 1;

    return result;
};

var plusOne2 = function (digits) {
    return helper(digits,digits.length-1);
}

var helper = function (digits,index) {
    if (digits[index] < 9) {
        digits[index]++;
        return digits;
    }
    else {
        if (index !== 0) {
            digits[index] = 0;
            return helper(digits,index-1);
        }
        else {
            var result = new Array(digits.length+1);
            for(var i = 0;i<digits.length+1;i++)
                result[i] = 0;
            result[0] = 1;
            return result;
        }
    }
}

var digits = [9];
var result = plusOne(digits);
print(result.length);