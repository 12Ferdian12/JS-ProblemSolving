let path = "NES";
function PT(path) {
  let x = 0,
    y = 0,
    history = ["0.0"];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") {
      y += 1;
    } else if (path[i] === "S") {
      y -= 1;
    } else if (path[i] === "E") {
      x += 1;
    } else if (path[i] === "W") {
      x -= 1;
    }
    // for (let j = 0; j < history.length; j++) {
    //   if (history[j] === x + "." + y) {
    //     return true;
    //   }
    // }
    if (history.includes(x + "." + y)) {
      return true;
    }
    history.push(x + "." + y);
  }
  let LP = x + "." + y;
  console.log(history);
  return false;
}
console.log(PT(path));
