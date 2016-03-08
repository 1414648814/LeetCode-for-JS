/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;
    if (numRows==1 || numRows>=len) return s;
    var result  = "";
    var index = 0;
    for (var i = 0; i < len; i+=2 * (numRows-1)) {
        result += s.charAt(i);
    }
    var middlenum = numRows - 2;
    for (var i = 0; i < middlenum; i++) {
        var diff = (numRows - 1) -2*(i+1);
        var sign = 1;
        result += s.charAt(i+1);
        //
        for (var j = i+numRows; j+sign*diff< len; j+=(numRows-1)) {
            result += s.charAt(j+sign*diff);
            sign ^= 1;
        }
    }
    index = numRows - 1;
    for (var i = index; i < len; i+=2*(numRows-1)) {
        result += s.charAt(i);
    }
    return result;

};


var result = convert("vcnifnmbaqapyjrgvg",10);
print(result);