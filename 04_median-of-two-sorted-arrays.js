/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let median = 0;
    let arr3 = (nums1.concat(nums2)).sort((a, b) => a - b)

    const midIdx = Math.round(arr3.length / 2);


    if ((arr3.length) % 2 === 0) {

        const a = arr3[midIdx - 1];
        const b = arr3[midIdx]

        if (a != 0 && b != 0) {
            median = (a + b) / 2;
        }

    } else {
        median = arr3[midIdx - 1];
    }
    
    return median;
};
