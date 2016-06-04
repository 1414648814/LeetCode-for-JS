/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) return;
    // 1.找到最后一个生序位置pos
    var pos = -1;
    var i = nums.length - 2;
    while (nums[i+1] <= nums[i]) {
        i--;
    }
    pos = i;
    // 2.如果不存在生序，则该数字是最大的，则反排该数组
    if (pos == 0) {
        reverse(nums,0,nums.length-1);
    }
    // 3.存在生序，找到pos之后最后一个比它大的位置
    else {
        i = nums.length - 1;
        while (nums[i] <= nums[pos] && i > pos) {
            i--;
        }
        swap(nums,pos,i);
    }
    // 4.反排pos之后的数
    reverse(nums,pos+1,nums.length-1);

    function swap(array,i,j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    // 反转数组
    function reverse(array,begin,end) {
        var l = begin,r = end;
        //数值进行交换
        while (l < r) {
            var temp = array[l];
            array[l] = array[r];
            array[r] = temp;
            l++;
            r--;
        }
    };
};


var nextPermutation2 = function(nums) {
    if (nums.length < 2) return;
    var i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) i--;
    if (i >= 0) {
        var j = nums.length-1;
        while (nums[j] <= nums[i] && j > i) j--;
        swap(nums,i,j);
    }
    reverse(nums,i+1,nums.length-1);

    function swap(array,i,j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    function reverse(array,start,end) {
        while(start < end) swap(array,start++,end--);
    };
};

var nextPermutation3 = function(nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i-1]) {
            console.log(111111111);
            reverse(nums,i,nums.length-1);
            for (var j = i;j < nums.length;j++) {
                if (nums[j] > nums[i-1]) {
                    var temp = nums[i-1];
                    nums[i-1] = nums[j];
                    nums[j] = temp;
                    return;
                }
            }
        }
    }
    nums.sort((a,b) => a - b);

    // 反转数组
    function reverse(array,begin,end) {
        var l = begin,r = end;
        //数值进行交换
        while (l < r) {
            var temp = array[l];
            array[l] = array[r];
            array[r] = temp;
            l++;
            r--;
        }
    };

}

var array = [100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
nextPermutation3(array);
for (var i = 0;i < array.length;i++)
    console.log(array[i]);