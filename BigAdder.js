var BigAdder = function(a, b) {
    this.a = a;
    this.b = b;
}

BigAdder.prototype.add = function() {
    var arrayA = this.a.split('').reverse(),
    arrayB = this.b.split('').reverse(),
    sumArray = [],
    remainder = 0,
    curr = 0,
    tempNum = 0,
    longestNumber = this.a.length >= this.b.length ? this.a.length : this.b.length;
    
    while (sumArray.length < longestNumber || remainder != 0) {
      sumArray[curr] = 0;
      if (arrayA[curr] !== undefined) {
        sumArray[curr] += parseInt(arrayA[curr]);
      }
      if (arrayB[curr] !== undefined) {
        sumArray[curr] += parseInt(arrayB[curr]);
      }
      sumArray[curr] += remainder;
      parseInt(arrayA[curr]) + parseInt(arrayB[curr]) + remainder;
      if (sumArray[curr] >= 10) {
        tempNum = sumArray[curr] % 10;
        remainder = (sumArray[curr] - tempNum) / 10;
        sumArray[curr] = tempNum;
      }
      else {
        remainder = 0;
      }
      curr++;
    }
    
    sumArray = sumArray.reverse().join('');

    while(sumArray.charAt(0) == '0' && sumArray.length > 1) {
      sumArray = sumArray.substring(1);
    }
    return isNaN(sumArray) ? 0 : sumArray;
};

var bigAdder = new BigAdder('8','12');
console.log(bigAdder.add());