var Intersection = function(a, b) {
    this.a = a;
    this.b = b;
}

Intersection.prototype.intersect = function() {
    if (this.a == null || this.b == null) return null;
    var longestArrayLength = this.a.length >= this.b.length ? this.a.length : this.b.length;
    var resultingArray = [];
    var arrayB = this.b;
    
    this.a.forEach(function(number) {
      if (arrayB.indexOf(number) > -1 && resultingArray.indexOf(number) == -1) resultingArray.push(number);
    });
    return resultingArray;
}

var intersection = new Intersection([6, 6, 7, 8],[8, 9, 6, 7]);
console.log(intersection.intersect());