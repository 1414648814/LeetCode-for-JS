/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s === null || s.length === 0) {
        return s;
    }
    var chars = s.split('');
    var low = 0;
    var high = s.length - 1;
    var vowels = "aeiouAEIOU";
    var tmp;
    while(low < high) {
        while(low < high && vowels.indexOf(chars[low]) === -1) {
            low++;
        }

        while(low < high && vowels.indexOf(chars[high]) === -1) {
            high--;
        }

        tmp = chars[high];
        chars[high] = chars[low];
        chars[low] = tmp;
        low++;
        high--;
    }

    return chars.join('');
};

var result = reverseVowels("leetcode");
console.log(result);