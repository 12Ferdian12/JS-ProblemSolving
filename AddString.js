let num1 = "123";
let num2 = "34";

function AS(num1, num2) {
  let I1 = Array.from(String(num1));
  let I2 = Array.from(String(num2));
  // return I2;
  for (let i = 0; i < I1.length; i++) {
    for (let j = 0; j < I2.length; j++) {
      if (I1.length < I2.length) {
        i += 1;
      } else {
        j += 1;
      }
      let X = I1[i] + I2[j];
      return X;
    }
  }
}

console.log(AS(num1, num2));
