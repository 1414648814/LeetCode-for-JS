/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums == null || nums.length === 0)
        return 0;
    else if(nums.length === 1)
        return 1;
    else
    {
        for(var i = 0;i < nums.length;i++)
        {
            var count = 1;
            while(nums[i] === nums[i+1])
            {
                i++;
                count++
            }
            if(count > 2)
            {
                nums.splice(i + 1 - count + 2 - 1,count - 2);
                i -= count-2;
            }
        }
    }
    return nums;
};

var nums = [0,0,1,1,1,1,2,2,2,4];
var result = removeDuplicates(nums);
console.log(result);