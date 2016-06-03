/**
 * Created by staff on 16/6/2.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var length_num1 = num1.length,length_num2 = num2.length;
    var temp_length = 0,tempArray = new Array(length_num1 + length_num2);
    for (var i = 0;i < length_num1 + length_num2;i++) {
        tempArray[i] = 0;
    }

    for (var i = num1.length-1;i >= 0;i--) {
        var digit1 = parseInt(num1.charAt(i));
        var carry = 0;
        var k = length_num1 - i - 1;

        for (var j = num2.length-1;j >= 0;j--) {
            var digit2 = parseInt(num2.charAt(j));
            var mulres = digit1 * digit2;
            mulres += tempArray[k] + carry;
            tempArray[k] = mulres%10;
            carry = parseInt(mulres/10);
        }

        if (k - 1 > temp_length) {
            temp_length = k - 1;
        }

        if (carry > 0) {
            tempArray[k] += carry;
            if (tempArray[k] > 9) {
                tempArray[k] = tempArray[k]%10;
                tempArray[k+1] = parseInt(tempArray[k]/10);
                k++;
            }
            if (k > temp_length) {
                temp_length = k;
            }
        }
    }

    var result = "";
    for (var i = temp_length;i >= 0;i--) {
        result += tempArray[i];
    }

    return result;

};



var multiply2 = function (num1,num2){
    var len1 = num1.length;
    var len2 = num2.length;
    //初始化数组
    var result = new Array(len1+len2);
    for(var k=0;k<result.length;k++){
        result[k] = 0;
    }

    for(var i=len1-1;i>=0;i--){
        for(var j=len2-1; j>=0;j--){
            var pos = len1-i+len2-j-2;

            /* Note: 48 is the character '0' in ASCII */
            //转为数字
            var prod = (num1.substr(i,1).charCodeAt(0) - 48)*(num2.substr(j,1).charCodeAt(0) - 48);
            result[pos] += prod % 10;
            //对数组元素进行向下取整
            result[pos+1] += Math.floor(prod / 10);
            //有进位的情况存在
            while(result[pos] >= 10){
                result[pos+1] += Math.floor(result[pos] / 10);
                result[pos] = result[pos] % 10;
            }
            //有进位的情况存在
            while(result[pos+1] >= 10){
                if(pos+2 < len1+len2){
                    result[pos+2] += Math.floor(result[pos+1]/10);
                }
                result[pos+1] = result[pos+1] % 10;
            }
        }
    }
    //转化为字符串
    var retString = "";
    for(var t=0;t<result.length;t++){
        retString = result[t]+retString;
    }
    //除去字符串开头的0
    var countZeros = 0;
    for(var d=0; d<retString.length;d++){
        if(retString.charAt(d) === '0'){
            countZeros ++;
        }else{
            break;
        }
    }
    if(countZeros === retString.length){
        retString = "0";
    }else{
        retString = retString.substring(countZeros, retString.length);
    }
    return retString;
}


var multiply3 = function (num1,num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    //初始化数组
    var result = new Array(len1 + len2);
    for (var k = 0; k < result.length; k++) {
        result[k] = 0;
    }
    for (var i = len1 - 1; i >= 0; i--) {
        for (var j = len2 - 1; j >= 0; j--) {
            var mul = (num1.substr(i, 1).charCodeAt(0) - 48) * (num2.substr(j, 1).charCodeAt(0) - 48);
            var p1 = i + j, p2 = i + j + 1;
            var sum = mul + result[p2];
            result[p1] += Math.floor(sum / 10);
            result[p2] = sum % 10;

        }
    }
    //转化为字符串
    var retString = "";
    for (var t = 0; t < result.length; t++) {
        retString = retString + result[t];
    }

    var countZeros = 0;
    for (var d = 0; d < retString.length; d++) {
        if (retString.charAt(d) === '0') {
            countZeros++;
        } else {
            break;
        }
    }
    if (countZeros === retString.length) {
        retString = "0";
    } else {
        retString = retString.substring(countZeros, retString.length);
    }
    return retString;

}

var num1 = "11",num2 = "22";
var result = multiply2(num1,num2);
console.log(result);

/*
核心算法：
将乘数的每一位和另一个数字进行相乘，将结果存储在数组中


 */