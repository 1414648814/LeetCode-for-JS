/**
 * @param {string} input
 * @return {number[]}
 */
/**
 * 分治法，将一个大问题，分为两个子问题，并且不断递归
 * 其中leftResult就是保存左边的计算结果，而rightResult则保存右边的计算结果
 */
var diffWaysToCompute = function(input) {
    var len = input.length;
    var result = [];
    for (var i = 0; i < len; i++) {
        var c = input.charAt(i);
        if (isValid(c)) {
            var leftResult = diffWaysToCompute(input.substring(0, i));
            var rightResult = diffWaysToCompute(input.substring(i+1));
            for (var p = 0; p < leftResult.length; p++) {
                for (var q = 0; q < rightResult.length; q++) {
                    switch (c){
                        case '+':
                            result.push(leftResult[p] + rightResult[q]);
                            break;
                        case '-':
                            result.push(leftResult[p] - rightResult[q]);
                            break;
                        case '*':
                            result.push(leftResult[p] * rightResult[q]);
                            break;
                        default :
                            break;
                    }
                }
            }
        }
    }
    if (result.length === 0)
        result.push(parseFloat(input));
    return result;

    function isValid(c) {
        return (c === '+' || c === '-' || c === '*');
    }
};

var string = "2*3-4*5";
var result = diffWaysToCompute(string);
console.log(result);