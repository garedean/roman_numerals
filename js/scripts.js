var toRoman = function(number) {
  var romanNumber = "";
  var decimal     = [1000, 500, 100,  50,  10,   5,   1];
  var roman       = ["M",  "D", "C", "L", "X", "V", "I"];

  for(var i = 0; i < roman.length; i++) {
      while (number >= decimal[i]) {
        number -= decimal[i];

        romanNumber += roman[i];
      }
  }
  return handleRepeats(romanNumber);
};

var handleRepeats = function(romanNumber) {
  var decimal     = [1000, 500, 100,  50,  10,   5,   1];
  var roman       = ["M",  "D", "C", "L", "X", "V", "I"];
  for(var i = 0; i < roman.length; i ++) {
    var n = roman[i];
    var searchVar = new RegExp(n + n + n + n, "g");
    var actualNum = decimal[roman.indexOf(n)];
    var nextGreatest = decimal[roman.indexOf(n) - 1];
    if (romanNumber.match(searchVar)) {
      var index = romanNumber.indexOf(n) - 1;
      var romanNumber = romanNumber.replace(searchVar, '');
      var romanArray = romanNumber.split("");
      console.log(index)
        if (nextGreatest * Math.round(actualNum) === nextGreatest) {
          romanArray.splice(index, 1, roman[decimal.indexOf(nextGreatest)]);
        }

      romanArray.splice(index, 0, n);
      romanNumber = romanArray.join("");
    }
  }
    return romanNumber;
};
