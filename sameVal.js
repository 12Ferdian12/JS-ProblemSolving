let arr = [1, 2, 3, 1];

function checker(arr) {
  for (let i; i <= arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checker(arr));
