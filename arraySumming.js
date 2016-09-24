var arr = [6, [8, 9, 9], 8, [9, 8]],
sum = 0;
arr.forEach(function(number, index) {
  if (Array.isArray(arr[index])) {
    arr[index].forEach(function(number) {
      sum += number;
    });
  }
  else {
    sum += number;
  }
});
console.log(sum);