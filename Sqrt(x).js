/**
 * @param {number} x
 * @return {number}
 */
//可以求得小数
var mySqrt = function(x) {
    var i = 0;
    var j = parseInt((x/2)+ 1);
    var mid;
    while(i <= j)
    {
        mid = (i + j)/2;
        var result = mid * mid;
        if(result == x)
            return mid;
        else if(result < x)
            i = mid + 1;
        else
            j = mid - 1;
    }
    return j;
};

//仅能适用于整数
var mySqrt2 = function(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (mid * mid > x) {
            right = mid - 1;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return right;
}

var x = 0.25;
var result = mySqrt(x);
console.log(result);
