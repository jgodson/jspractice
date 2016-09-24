// To use: type in -> node addBigNumbers.js # # # # #.... or require module

console.log(addUsingStrings(process.argv.slice(2))); // First two arguments aren't needed

function addUsingStrings(numbersToAdd) {
  // Some input validation
  if (!Array.isArray(numbersToAdd)) {
    throw new TypeError("Input must be an array of numbers");
  }
  else {
    numbersToAdd.forEach(function checkInput(number) {
      if (typeof parseInt(number) != 'number' || isNaN(parseInt(number))) {
        throw new TypeError("All elements in input array need to be numbers");
      }
    });
  }
  console.log(numbersToAdd);
  var sum = "",
    sumArray = [0],
    biggestNumber = 0, 
    // Make numbers into strings, then array of values, then reverse it
    numbers = numbersToAdd.map(function(number) {
      number = number.toString().split('').reverse();
      if (number.length > biggestNumber) biggestNumber = number.length;
      return number;
    }),
    remainder = 0,
    temp = 0,
    curr = 0;
  while (sumArray.length <= biggestNumber || remainder != 0) {
    sumArray[curr] = 0;
    numbers.forEach(function(number) {
      if (number[curr] !== undefined) {
        sumArray[curr] += parseInt(number[curr]);
      }
    });
    sumArray[curr] += remainder;
    // Find remainder
    if (sumArray[curr] >= 10) {
      temp = sumArray[curr] % 10;
      remainder = (sumArray[curr] - temp) / 10;
      sumArray[curr] = temp;
    }
    else {
      remainder = 0;
    }
    curr++;
  }
  
  sum = sumArray.reverse().join('');

  while (sum.charAt(0) == '0') {
    sum = sum.substring(1);
  }
  
  return sum || 0;
}

module.exports = addUsingStrings;