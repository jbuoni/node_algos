/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromeSubstring = function(s) {
  if(s.length === 1) {
    return s;
  }

  const t = Array(s.length).fill().map(() => Array(s.length).fill(false));

  let longestString = '';

  for(i = 0; i < s.length - 1; i++) {
    t[i][i] = true;

    longestString = longestString.length <= 1 ? s[i] : longestString;

    if(s[i] === s[i + 1]) {
      t[i][i + 1] = true;
      longestString = s.substring(i, i + 2);
    }
  }

  for(i = s.length - 1; i >= 0; i--) {
    for(j = i + 2; j < s.length; j++) {
        t[i][j] = s[i] === s[j] && t[i + 1][j - 1];

        if(t[i][j] && longestString.length < (j - i + 1)){
          longestString = s.substring(i, j + 1);
        }
    }
  }

  return longestString;

};

const longestPalindromeSequence = function(s) {

  if(s.length === 1) {
    return 1;
  }

  const t = Array(s.length).fill().map(() => Array(s.length).fill(0));

  for(i = 0; i < s.length; i++) {
    t[i][i] = 1;
  }

  for(i = s.length - 1; i >= 0; i--) {
    for(j = i; j < s.length; j++) {
        if(s[i] === s[j]) {
            if(j - i <= 1) {
                t[i][j] = j - i + 1;
            } else {
                t[i][j] = t[i + 1][j - 1] + 2;
            }
        } else {
            t[i][j] = Math.max(t[i + 1][j], t[i][j - 1]);
        }
    }
}
  return t[0][s.length - 1];

};

// console.log(longestPalindromeSubstring("cbbd"))
// console.log(longestPalindromeSubstring("babad"))
// console.log(longestPalindromeSubstring("ac"))
// console.log(longestPalindromeSubstring("a"))

longestPalindromeSequence("cbbd")
longestPalindromeSequence("babad")
longestPalindromeSequence("ac")
longestPalindromeSequence("a")
longestPalindromeSequence("bbbab")
