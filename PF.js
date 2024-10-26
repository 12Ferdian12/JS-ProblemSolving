// let temp,
//   x = 4,
//   n = 5;

// function PP(n) {
//   if (n == 1) {
//     return true;
//   }
//   temp = n ** 1 / 4;
//   if (temp == x) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(PP(n));

let temp,
  point = 4,
  x = 4,
  n = 0;

function PP(x, n) {
  temp = Math.log(n) / Math.log(x);
  parseInt(temp);
  console.log(typeof temp);
  // Number.isInteger(temp);
  // return temp;
  if (!Number.isInteger(temp)) {
    return false;
  }
  temp = x ** temp;
  if (temp == n) {
    return true;
  } else {
    return false;
  }
}

console.log(PP(x, n));

// function getBaseLog(x, y) {
//   return Math.log(y) / Math.log(x);
// }

// // 2 x 2 x 2 = 8
// console.log(getBaseLog(2, 8));
