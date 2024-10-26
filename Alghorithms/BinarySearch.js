let Arr = [1, 4, 6, 7, 8, 10, 13, 15];
let item = 8;

function binarySearch(Arr, item) {
  let low = 0;
  let high = Arr.length - 1;

  while (low <= high) {
    let mid = low + high;
    guess = mid.split;
    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    return "None";
  }
}

console.log(binarySearch(Arr, item));
