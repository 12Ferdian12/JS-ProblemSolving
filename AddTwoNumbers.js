let l1 = [8, 9, 5, 5];
let l2 = [5, 5];
let i, j, temp, temp2;
let carry = 0;
let out = new Array();

function AddTwoNums(l1, l2) {
  while (l1.length < l2.length) {
    l1.unshift(0);
  }
  while (l1.length > l2.length) {
    l2.unshift(0);
  }
  for (i = 0; i < l1.length; i++) {
    let sum = l1[i] + l2[i] + carry;
    carry = 0;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    }
    out.push(sum);
  }
  if (carry == 1) {
    out.push(carry);
  }
  this.l1 = [5, 5, 5];
  console.log("di dalam fungsi =", l1);

  return out;
}

console.log(AddTwoNums(l1, l2));
console.log("di luar fungis = ", l1);

root = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: null,
      left: null,
    },
    left: null,
  },
  left: {
    val: 4,
    right: null,
    left: null,
  },
};
