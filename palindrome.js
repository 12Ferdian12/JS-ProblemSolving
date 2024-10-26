let X = 1000021;

function Pal(X) {
  let S = Array.from(String(X));
  let T = S.length - 1;
  let i;
  let PT = 0;
  for (i = 0; i < S.length; i++) {
    if (S[T - i] !== S[i]) {
      console.log(S[T - i], S[i]);
      return false;
    }
  }
  return true;
}
console.log(Pal(X));
