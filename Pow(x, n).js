/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function fomatFloat(src,pos){
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}

var myPow = function(x, n) {
    if(n < 0){
        n = -n;
        x = 1/x;
    }
    var result = 1;
    for(var f = x;n > 0;){
        if(n & 1){
            result *= f;
        }
        f *= f;
        n = n/2;
    }
    return fomatFloat(result,5);
};

var x = 2.00000,n = -2147483648;
var result = myPow(x,n);
console.log(result);
console.log(2147483648>>1);