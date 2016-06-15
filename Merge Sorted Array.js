/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var index = m + n - 1;
    var m1 = m - 1,n1 = n - 1;

    while (m1 >= 0 && n1 >= 0)
    {
        if (nums1[m1] >= nums2[n1])
        {
            nums1[index--] = nums1[m1--];
        }
        else {
            nums1[index--] = nums2[n1--];
        }

    }

    while (m1 >= 0 && index >= 0)
    {
        nums1[index--] = nums1[m1--];
    }

    while (n1 >= 0 && index >= 0)
    {
        nums1[index--] = nums2[n1--]
    }
};

var num1 = [1,4,8];
var num2 = [3,5,6,9];

var result = merge(num1,3,num2,4);
console.log(result);