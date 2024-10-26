let a = [1, 2, 3];
let b = [1, 3, 2];
function compareTriplets(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      b += 1;
    } else if (a[i] > b[i]) {
      a += 1;
    } else {
      a += 0;
      b += 0;
    }
  }
  return a, b;
}
console.log(compareTriplets(a, b));
