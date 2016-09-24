const assert = require('assert');

function InverseFizzBuzz(list) {
    this.list = list;
}

InverseFizzBuzz.prototype.sequence = function() {
  var listCopy,
  results = [],
  currentNum = 1,
  currentResult = 0;
  while (currentNum <= 100) {
    listCopy = this.list.slice(0);
    results[currentResult] = [];
    for (; currentNum <= 100; currentNum++) {
      if (listCopy.length == 0) {
        currentNum = results[currentResult][0] + 1;
        break;
      }
      if (listCopy[0] == 'fizz' && currentNum % 3 == 0 && currentNum % 5 != 0) {
        listCopy.shift();
        results[currentResult].push(currentNum);
      }
      else if (listCopy[0] == 'buzz' && currentNum % 5 == 0 && currentNum % 3 != 0) {
        listCopy.shift();
        results[currentResult].push(currentNum);
      }
      else if (results[currentResult].length > 0) {
        if (currentNum % 3 == 0 || currentNum % 5 == 0) {
          results.pop();
          break;
        }
        results[currentResult].push(currentNum);
      }
    }
    currentResult++;
    if (this.list.length == 1) break; // Stop if only one word
  }
  if (currentNum > 100) results.pop();
  var shortestSequence = {
    index: 0,
    number: 100
  };
  results.forEach( function (result, index) {
    if (result.length < shortestSequence.number) {
      shortestSequence.number = result.length;
      shortestSequence.index = index;
    }
  });
  return results[shortestSequence.index] || null;
};

var first= new InverseFizzBuzz(['fizz']);
console.log(first.sequence()); // [3]
assert.equal(JSON.stringify(first.sequence()), JSON.stringify([3]), 'First test failed');

var second = new InverseFizzBuzz(['buzz']);
console.log(second.sequence()); // [5]
assert.equal(JSON.stringify(second.sequence()), JSON.stringify([5]), 'Second test failed');

var third = new InverseFizzBuzz(['fizz', 'buzz']);
console.log(third.sequence()); // [9, 10]
assert.equal(JSON.stringify(third.sequence()), JSON.stringify([9, 10]), 'Third test failed');

var fourth = new InverseFizzBuzz(['buzz', 'fizz']);
console.log(fourth.sequence()); // [5, 6]
assert.equal(JSON.stringify(fourth.sequence()), JSON.stringify([5, 6]), 'Fourth test failed');

var fifth = new InverseFizzBuzz(['fizz', 'buzz', 'fizz']);
console.log(fifth.sequence()); // [3, 4, 5, 6]
assert.equal(JSON.stringify(fifth.sequence()), JSON.stringify([3, 4, 5, 6]), 'Fifth test failed');

var sixth = new InverseFizzBuzz(['fizz', 'fizz']);
console.log(sixth.sequence()); // [6, 7, 8, 9]
assert.equal(JSON.stringify(sixth.sequence()), JSON.stringify([6, 7, 8, 9]), 'Sixth test failed');

var seventh = new InverseFizzBuzz(['fizz', 'fizz', 'buzz']);
console.log(seventh.sequence()); // 6, 7, 8, 9, 10]
assert.equal(JSON.stringify(seventh.sequence()), JSON.stringify([6, 7, 8, 9, 10]), 'Seventh test failed');

var eigth = new InverseFizzBuzz(['buzz', 'fizz', 'buzz']);
console.log(eigth.sequence()); // null
assert.equal(eigth.sequence(), null, 'Eigth test failed');