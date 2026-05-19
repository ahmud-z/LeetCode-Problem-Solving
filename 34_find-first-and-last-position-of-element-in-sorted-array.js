/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let indexArr = [-1,-1]

    for (let i = 0; i < nums.length; i++) {

        for (let j = nums.length; j >= 0; j--) {
            if (nums[j] === target) {
                indexArr[1] = j;
                break;
            }
        }

        if (nums[i] === target) {
            indexArr[0] = i;
            break;
        }
    }

    return indexArr;
};
