let S = "abc";
let T = "xbnc";

function SS(S, T) {
  let A = Array.from(String(S));
  let B = Array.from(String(T));
  let C = 0;
  let D = A.length;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        i += 1;
        C += 1;
      }
    }
  }
  if (C == D) {
    return true;
  } else {
    return false;
  }
}
console.log(SS(S, T));
