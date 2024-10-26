let mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
let k = 3;
function Fweak(mat, k) {
  let val,
    temp = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      temp = new Array();
      if (val == 1) {
        temp[i] = temp + 1;
      } else {
        break;
      }
    }
    if (true) {
      for (let l = 0; l < k; l++) {
        let out = out + temp[l];
      }
    }
    return out;
  }
  console.log(typeof temp);
}

console.log(Fweak(mat, k));
