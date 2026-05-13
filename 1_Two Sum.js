var twoSum = function (nums, target) {

    let sum = 0;
    let idx = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            sum = nums[i] + nums[j];

            if (sum == target) {
                idx.push(i);
                idx.push(j);
                break;
            }
        }
        if (sum == target) {
            break;
        }
    }

    return idx
};
