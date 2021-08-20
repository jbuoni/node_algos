/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {

  if(!s || s.length === 0) {
    return 0;
  }

  const map = new Map();
  let start = 0;
  let max = -Infinity;

  for(i = 0; i < s.length; i++) {
    if(map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
    }

    map.set(s[i], i);

    max = Math.max(max, i - start + 1);
  }

  return max;
};