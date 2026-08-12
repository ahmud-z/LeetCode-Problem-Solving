function twoSum(nums, target) {
    let prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i]
        }
        prevMap.set(nums[i], i);
    }

    return;
}

const arr = [3,3];
const target = 6

console.log(twoSum(arr, target));
