var numerals = {
  '1': {
     inc: 'I',
     mid: 'V'
   },
   '10': {
     inc: 'X',
     mid: 'L'
   },
   '100': {
     inc: 'C',
     mid: 'D'
   },
   '1000': {
     inc: 'M',
     mid: 'v'
   },
   '10000': {
     inc: 'x',
     mid: 'l'
   },
   '100000': {
     inc: 'c',
     mid: 'd'
   },
   '1000000': {
     inc: 'm'
   }
};

var RomanNumeral = function(number) {
  this.realNumber = number,
  this.convert = function convertToRomanNumber () {
    if (this.realNumber <= 0) return null;
    var result = [],
    power = 0,
    base10Array = this.realNumber.toString().split('');

    base10Array.forEach(function(num, index) {
      result[index] = "";
      power = Math.pow(10, (base10Array.length - (index + 1))) || 1;
      num = parseInt(num) * power;
      if (num > 3000) console.log('Small numbers are used to indicate * 1000');
      if (num == (power * 5)) {
        result[index] += numerals[power.toString()].mid;
      }
      else if (num > (power * 5)) {
        if (num > (power * 8)) {
          result[index] += numerals[(power * 10).toString()].inc; // One level up
          for (var adds = -(num - (power * 10)) / power; adds > 0; adds--) {
            result[index] += numerals[power.toString()].inc;
          }
          result[index] = result[index].split('').reverse().join('');
        }
        else {
          result[index] += numerals[power.toString()].mid;
          for (var adds = (num - (power * 5)) / power; adds > 0; adds--) {
            result[index] += numerals[power.toString()].inc;
          }
        }
      }
      else {
        if (num > (power * 3)) {
          result[index] += numerals[power.toString()].mid;
          for (var adds = -(num - (power * 5)) / power; adds > 0; adds--) {
            result[index] += numerals[power.toString()].inc;
          }
          result[index] = result[index].split('').reverse().join('');
        }
        else {
          for (var adds = (num / power); adds > 0; adds--) {
            result[index] += numerals[power.toString()].inc;
          }
        }
      }
    });
    return result.join('');
  }
}

var romanNumeral = new RomanNumeral(3369);
console.log(romanNumeral.convert());
