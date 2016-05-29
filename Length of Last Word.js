/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	var length = s.length,
		count = 0;
	while (length > 0 && s.charAt(length-1)===' ')
		length--;
	while (length > 0 && s.charAt(length-1)!==' '){
		length--;
		count++
	}
	return count;
};


/*
第一种方法:用while进行定位

第二种方法：用split
String[] words = s.split(" ");
if(words.length==0) return 0;
else return words[words.length-1].length();

第三种方法：用lastIndexOf，trim（用于去掉左右两边的空格）
return s.trim().length() - s.trim().lastIndexOf(" ") - 1;

*/