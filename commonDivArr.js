let nums = [5, 4, 2, 9, 10];
let i, j;

function ArrSm(nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        return "The smallest number in nums is" + " " + nums[i];
      }
    }
  }
}
// function ArrBig(nums) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {}
//   }
// }

console.log(ArrSm(nums));
