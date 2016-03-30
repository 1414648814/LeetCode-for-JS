/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 下面是我自己的想法，但不幸运的是，time limit
var strStr = function(haystack, needle) {
	var length_hay = haystack.length;
	var length_need = needle.length;
	var isfind = false;
	var result = 0;
	for (var i = 0; i < length_hay; i++) {
		while (i < length_hay && haystack.charAt(i) != needle.charAt(0)) i++;
		var temp = i;
		for (var j = 0; j < length_need; j++,i++) {
			if (haystack.charAt(i) == needle.charAt(j)) {
				if (j == length_need-1) {
					isfind = true;
					return result = temp;
				}
			} 
			else {
				i = temp;
				break;
			}
		}
	}
	if (!isfind) {
		return -1;
	}

};

/*
	思路：利用函数substr和valueOf
*/
var strStr2 = function(haystack, needle) {
	var length_hay = haystack.length;
	var length_need = needle.length;
	for (var i = 0; i < length_hay - length_need + 1; i++) {
		var substr = haystack.substr(i,length_need);
		if (substr.valueOf() === needle.valueOf()) 
			return i;
	}
	return -1;
}