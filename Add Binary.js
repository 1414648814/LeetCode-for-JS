/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length < b.length)
    {
        var temp = a;
        a = b;
        b = temp;
    }

    var pa = a.length-1;
    var pb = b.length-1;
    var carries = 0;
    var result = "";

    //小的一方
    while(pb >= 0)
    {
        var sum = parseInt(a.charAt(pa)) + parseInt(b.charAt(pb)) + carries;
        result = (sum % 2).toString() + result;
        carries = Math.floor(sum / 2);
        pa --;
        pb --;
    }
    //
    while(pa >= 0)
    {
        var sum = parseInt(a.charAt(pa)) + carries;
        result = (sum % 2).toString() + result;
        carries = Math.floor(sum / 2);
        pa --;
    }

    if(carries == 1)
        result = "1" + result;

    return result;
};

var addBinary2 = function(a, b) {
    var lena = a.length;
    var lenb = b.length;
    var i = 0,carry = 0;
    var res = "";

    while(i < lena || i < lenb || carry!=0)
    {
        var x = (i < lena) ? parseInt(a.charAt(lena - 1 - i)) : 0;
        var y = (i < lenb) ? parseInt(b.charAt(lenb - 1 - i)) : 0;

        res = (x + y + carry) % 2 + res;
        carry = Math.floor((x + y + carry)/2);
        i++;
    }
    return res;
}

var a = "11",b = "01";
var result = addBinary(a,b);
console.log(result);