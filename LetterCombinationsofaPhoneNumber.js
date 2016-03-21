/*
思路：先选出字符串第一个字符对应的数组
将剩下字符的数组一一和第一个字符对应的数组
进行遍历生成字符串，保存到一个专门用来替代
的数组，遍历完一次，生成的结果替代掉之前的
第一个字符对应的数组，接着和下一个字符对应
的数组进行遍历，一直重复到字符完
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  	var _Data = {
  		"1":['*'],
  		"2":['a','b','c'],
  		"3":['d','e','f'],
  		"4":['g','h','i'],
  		"5":['j','k','l'],
  		"6"['m','n','o'],
  		"7":['p','q','r','s'],
  		"8":['t','u','v'],
  		"9":['w','x','y','z']
  	};
  	var First_array = map[digits[0]];
    digits = digits.substr(1);
    digits.splict('').foreach(function(digit){
        var Tidai_array = [];
        _Data[digit].foreach(function(letter){
            Tidai_array.concat(First_array.map(function(item){
                return item + letter;
            }));
        });
        First_array = Tidai_array;
    });
    return First_array === undefined ? [] : First_array;
};
