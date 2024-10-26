let cap = 62;
let on = 62;
let wait = 43;

function enough(cap, on, wait) {
  let sum;
  //   let temp = on + wait;
  sum = on - wait;
  return sum;
  //   if (temp == cap) {
  //     sum = on - wait;
  //     return sum;
  //   } else {
  //     return false;
  //   }
}

console.log(enough(cap, on, wait));
