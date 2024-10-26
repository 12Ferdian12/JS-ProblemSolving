let matrix = [
  [9, 1, 3, 4],
  [2, 9, 2, 3],
  [0, 5, 9, 2],
];

// let matrix = [[18], [66]];

// function TM(matrix) {
//   let i, j, k, l;
//   if (matrix.length < 2) {
//     return true;
//   } else {
//     for (i = 0; i < matrix.length; i++) {
//       for (j = 0; j < matrix.length; j++) {
//         if (matrix[i][j].length == 1) {
//           return false;
//         }
//         l = i + 1;
//         k = j + 1;
//         if (
//           matrix[i][j] == matrix[l][k] &&
//           matrix[i][j] == matrix[l + 1][k + 1]
//         ) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
// }

// SOLUTION:
if (matrix.length < 2) {
  return true;
}

for (let i = 0; i < matrix.length - 1; i++) {
  for (let j = 0; j < matrix[0].length - 1; j++) {
    if (matrix[i][j] !== matrix[i + 1][j + 1]) {
      return false;
    }
  }
}

return true;
console.log(TM(matrix));
