let nums = [2, 5, 5, 11];
let target = 10;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      j = j + 1;
      if (sum == target) {
        let package = [i, j];
        return package;
      }
    }
  }
}

console.log(twoSum(nums, target));
