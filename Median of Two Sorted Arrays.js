/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;

    var l = Math.floor((m + n + 1) / 2);
    var r = Math.floor((m + n + 2) / 2);
    var a = getKth(0, 0, l);
    var b = getKth(0, 0, r);
    return (a + b) / 2;

    function getKth(aStart, bStart, k) {
        // 1.边界条件判断
        if (aStart > nums1.length - 1) return nums2[Math.floor(bStart + k -1)];
        if (bStart > nums2.length - 1) return nums1[Math.floor(aStart + k -1)];
        if (k == 1) return Math.min(nums1[Math.floor(aStart)], nums2[Math.floor(bStart)]);

        var aMid = Number.MAX_VALUE;
        var bMid = Number.MAX_VALUE;
        if (aStart + Math.floor(k/2) - 1 < nums1.length) aMid = nums1[Math.floor(aStart + k/2 -1)];
        if (bStart + Math.floor(k/2) - 1 < nums2.length) bMid = nums2[Math.floor(bStart + k/2 -1)];

        if (aMid < bMid)
            return getKth(aStart + Math.floor(k/2), bStart, Math.floor(k/2));
        else
            return getKth(aStart, bStart + Math.floor(k/2), Math.floor(k/2));
    }
};

var nums1 = [1,2];
var nums2 = [1,2];
var result = findMedianSortedArrays(nums1, nums2);
console.log(result);