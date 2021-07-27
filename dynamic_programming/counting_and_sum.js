const test = require('tape');

/**
 * Given an array, find the sub array with the max sum
 *
 * @param {*} arr
 */
const kadanes = (arr) => {
  let answer = Number.MIN_VALUE;

  t = Array(arr.length).fill(0);
  t[0] = arr[0];

  for(let i = 1; i < arr.length; i++) {
    t[i] = Math.max(t[i - 1], 0) + arr[i];
    temp = t[i] == 0 && 0;
    answer = t[i] > answer && t[i];
  }

  return answer;
};

test('kadanes', (t) => {
  t.equals(kadanes([1, 2, 3, -2, 5]), 9)
  t.equals(kadanes([1, 2, -3, -2, 5]), 5)
  t.equals(kadanes([1, 2, -3, 2, 5]), 7)
  t.equals(kadanes([1, 2, -3, 2, 5]), 7)
  t.end();
});

