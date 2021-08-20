/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {

  if(x < 0) {
    return false;
  }
  const digits = Array.from(String(x), Number);

  for(i = 0; i < digits.length / 2; i ++) {
    if(digits[i] !== digits[digits.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121))