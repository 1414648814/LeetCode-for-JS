/**
 * Created by George on 16/5/30.
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === -2147483648 && (divisor === -1 || divisor === -1)){
        return divisor == 1? -2147483647 : 2147483647;
    }
    else if(dividend === 2147483648 && (divisor === -1 || divisor === -1)){
        return divisor == 1? 2147483647 : -2147483647;
    }
    return divideLong(dividend,divisor);
};

var divideLong = function(dd,dv){
    var isPos = (dd > 0 && dv > 0) || (dd < 0 && dv < 0);
    dd = Math.abs(dd);
    dv = Math.abs(dv);

    var digits = 0;
    while (dv <= dd){
        dv <<= 1;
        digits++;
    }
    //重置除数
    var result = 0;
    dv >>= digits;

    while(digits >= 0){
        if(dd >= (dv << digits)){
            dd -= dv << digits;
            result += 1<<digits;
        }
        digits--;
    }
    return isPos?result:-result;
}

var divide2 = function(dividend,divisor){
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    var isNeg = dividend > 0 ^ divisor > 0;
    var result = 0;

    dividend = Math.abs(dividend);
    subtract(Math.abs(divisor),1);

    function subtract(d,q){
        if(dividend > d){
            subtract(d+d,q+q);
        }
        if(dividend >= d){
            dividend -= d;
            result += q;
        }
    }

    return isNeg ? -result : result;
}

var divide3 = function(dividend,divisor){
    var dd = Math.abs(dividend);
    var dv = Math.abs(divisor);
    var result = 0;
    while(dd > dv){
        var c = dv;
        for (var i=0;dd >= c;i++,c<<=1){
            dd -= c;
            result += 1<<i;
        }
    }
    return ((dividend ^ divisor) >> 31)?(-result):(result);
}

var divide4 = function(dividend, divisor) {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    var isPositive = true;
    if (dividend > 0 !== divisor > 0) isPositive = false;

    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);

    var count = 1,
        result = 0,
        base = divisor;

    while (dividend >= divisor) {
        count = 1;
        base = divisor;
        while (base <= (dividend >> 1)) {
            base = base << 1;
            count = count << 1;
        }
        result += count;
        dividend -= base;
    }

    if (!isPositive) result = -result;
    return result;
};

var divide5 = function (dividend, divisor) {
    // result sign
    var sign = (dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0) ? -1 : 1;

    // make args non-negative
    dividend = dividend < 0 ? 0 - dividend : dividend;
    divisor = divisor < 0 ? 0 - divisor : divisor;

    // corner cases
    if (divisor === 0) return +Infinity;
    if (dividend === 0) return 0;
    if (divisor > dividend) return 0;

    var a = dividend;
    var b = divisor;
    var result = 1;

    // divide dividend by 2, multiply dividend by 2 simultaneously
    while ((b << 1) > 0 && (b << 1) <= dividend) {
        a >>= 1;
        b <<= 1;
        result <<= 1;
    }

    // add remainder
    result += divide(dividend - b /* remainder */, divisor);

    // adjust sign
    result = sign === -1 ? 0 - result : result;

    // for leetcode
    result = Math.min(2147483647, result);
    result = Math.max(-2147483648, result);

    return result;
}

var result = divide3(100,3);
print(result);