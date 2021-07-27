const test = require('tape');

/**
  More or less make a 2D table that will contain all possible iterations of the
  value and the change needed to make such values

  Time complexity: O(cb)
  Space complexity: O(cb)

  Note: This will determine if we have the coins to make some sort of change, and not exact change

  @param {*} coins
  @param {*} value
 */
const coinChange = (coins, value) => {
  const num_coins = coins.length;
  let t = Array(value + 1).fill().map(() => Array(num_coins).fill(0));

  for(let i = 0; i < num_coins; i++)
    t[0][i] = 1; //Init

  // From the bottom up, fill the rest of the table
  for(let i = 1; i < value + 1; i++) {
    for(let j = 0; j < num_coins; j++) {
      const k = i - coins[j] >= 0 && t[i - coins[j]][j] || 0;
      const b = j >= 1 && t[i][j - 1] || 0;

      t[i][j] = k + b;
    }
  }

  return t[value][num_coins - 1];
};

/**
  More or less make a 2D table that will contain all possible iterations of the
  value and the change needed to make such values. Same as above but no repeating

  Time complexity: O(cb)
  Space complexity: O(cb)

  Note: This will determine if we have the coins to make some sort of change, and not exact change
  @param {*} coins
  @param {*} value
 */
const coinChangeNoRepeat = (coins, value) => {
  const num_coins = coins.length;
  let t = Array(num_coins).fill().map(() => Array(value + 1).fill(0));

  for(var i = 0; i < num_coins; i++)
    t[i][0] = 1

  for(var b = 0; b < value + 1; b++) {
    if(b >= 1)
        t[0][b] = 0
  }

  for(var i = 1; i < num_coins; i++) {
    for(var b = 0; b < value + 1; b++) {
      if(coins[i] <= b)
        t[i][b] = t[i - 1][b - coins[i]] + 1
      else
          t[i][b] = t[i - 1][b]
    }
  }

  return t[num_coins - 1][value]
};

/**
 * Determine the least amount of coins needed to make change
 *
 * @param {*} coins
 * @param {*} value
 */
const leastCoins = (coins, value) => {
  let addedCoins = [];
  let c  = coins.length - 1;

  while(c >= 0) {
    while(coins[c] <= value) {
      value -= coins[c];
      addedCoins.push(coins[c])
    }

    c--;
  }

  return addedCoins;
};

// Test coins
const coins = [1, 2, 3]
const coins1 = [5, 10, 25, 50]
const coins2 = [1, 5, 10, 25, 50]

test('coinChange', (t) => {
  t.equal(coinChange(coins, 4), 4);
  t.equal(coinChange(coins1, 15), 2);
  t.equal(coinChange(coins2, 30), 18);
  t.end();
});

test('coinChangeNoRepeat', (t) => {
  t.equal(coinChangeNoRepeat(coins, 4), 1);
  t.equal(coinChangeNoRepeat(coins1, 15), 1);
  t.equal(coinChangeNoRepeat(coins2, 30), 3);
  t.end();
});

test('leastCoins', (t) => {
  const coins3 = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
  t.deepEquals(leastCoins(coins3, 93), [50, 20, 20, 2, 1])
  t.deepEquals(leastCoins(coins3, 53), [50, 2, 1])
  t.end();
});