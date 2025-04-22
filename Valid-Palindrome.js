/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleanS === cleanS.split('').reverse().join('');
};