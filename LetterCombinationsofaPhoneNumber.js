/**
 * @param {string} digits
 * @return {string[]}
 */
var getDataLength = function(index) {
	if (index == -1) {
		return -1;
	}
	else if (index == 0) {
		return 1;
	}
	else if (index == 6 || index == 8) {
		return 4;
	}
	else {
		return 3;
	}
};

var letterCombinations = function(digits) {
  	var _Data = [
  		['*'],
  		['a','b','c'],
  		['d','e','f'],
  		['g','h','i'],
  		['j','k','l'],
  		['m','n','o'],
  		['p','q','r','s'],
  		['t','u','v'],
  		['w','x','y','z']
  	];
  	var result = new Array();
  	if (digits == null || digits == "" || digits.length == 0) {
  		return result;
  	}
  	var first_value = 0,
  		second_value = 0;
  	if (digits.length == 1)
  		first_value = parseInt(digits.charAt(0));
  	else if (digits.length > 1) {
  		first_value = parseInt(digits.charAt(0));
  		second_value = parseInt(digits.charAt(1));
  	}
  	for (var i = 0; i < _Data[getDataLength(first_value)].length; i++) {
  		var substring = _Data[i];
  		for (var j = 0; j < _Data[getDataLength(second_value)].length; j++) {
  			substring += _Data[j];
  		}
  		result.push(substring);
  	}
  	return result;
};
