/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLen,
    l,
    r;

    if (s.length < 2) {
    	return s.length;
    }

    maxLen = 0;

    //其中maxLen用来记录最长的长度，l则记录上次重复的位置；
    for (l = 0 ,r = 1; r < s.length; r++) {
    	i = s.lastIndexOf(s[r], r-1);
    	if (i >= 0) {
    		maxLen = Math.max(maxLen, r - l);
    		l = Math.max(l, i+1);
    	}
    }
    return Math.max(maxLen, r-l);    
};


var lengthOfLongestSubstring2 = function(s) {
	var map = {};
	var left = 0;
	var max = 0;

	for (var i = 0; i < s.length; i++) {
		//计算重复的字母位置
		left = (map[s[i]] + 1) ? Math.max(left,map[s[i]]+1) : left;
		//更改字母对应的位置
		map[s[i]] = i;
		//更新max的值
		max = Math.max(max,i-left+1);
	};
	return max;

};


var lengthOfLongestSubstring3 = function(s){
	var temp = [];
    var maxLength = 0;

    for(var i = 0; i < s.length; i++){
        if(temp.indexOf(s[i]) === -1){
            temp.push(s[i]);
            if(temp.length > maxLength)
                maxLength = temp.length;
        }else{
            temp = temp.slice(temp.indexOf(s[i]) + 1,temp.length);
            temp.push(s[i]);
        }
    }
    
    return maxLength;
};


