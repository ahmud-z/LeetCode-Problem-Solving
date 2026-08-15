/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const numSet = new Set();

    for (const element of nums) {

        if (numSet.has(element)) {
            return true;
        }
        numSet.add(element)
    }

    return false;
};
