/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {  // III
    let roman = {
\I\ :  1,
\V\ :  5,
\X\ :  10,
\L\ :  50,
\C\ :  100,
\D\ :  500,
\M\ :  1000,    
    };
    
let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbolValue = roman[s[i]];
    const nextSymbolValue = roman [s[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
};