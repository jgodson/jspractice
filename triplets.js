function main() {
    var a = ['5', '6', '7'];
    var b = ['3', '6', '10'];
    var points = [0, 0];
  for (var loop = 0; loop < 3; loop++) {
 
    if (a[loop] != b[loop]) {
      a[loop] = parseInt(a[loop]);
      b[loop] = parseInt(b[loop]);
      if (a[loop] > b[loop]) {
        points[0]++
      }
      else {
        points[1]++
      }
    }
  }
  console.log(points[0], points[1]);
}

main();