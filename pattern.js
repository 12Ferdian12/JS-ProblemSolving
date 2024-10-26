let i,
  j,
  k,
  nums = [3, 5, 0, 3, 4];

function P132(nums) {
  // i < j < k
  for (i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        // nums[i] < nums[k] < nums[j]
        if (nums[i] < nums[k] && nums[k] < nums[j]) return true;
      }
    }
  }
  return false;
}
console.log(P132(nums));

// function P132(target, nums) {
//   let temp = [];
//   for (i = 0; i < nums.length; i++) {
//     console.log(nums[i], target[i]);
//     if (nums[i] == target[i]) {
//       temp += nums[i];
//     } else {
//       break;
//     }
//   }
//   if (temp == target) {
//     return true;
//   } else {
//     return false;
//   }
// }
