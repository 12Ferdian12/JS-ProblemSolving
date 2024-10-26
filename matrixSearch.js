let matrix = [
  [1, 3, 5, 5],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;
let i, j;

function searchMatriX(matrix, target) {
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
}

console.log(searchMatriX(matrix, target));
