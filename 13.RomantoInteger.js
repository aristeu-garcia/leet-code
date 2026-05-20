/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const map = new Map();
  let result = 0
  for (let i = s.length - 1; i >= 0; i--) {
    map.set(s[i], values[s[i]]);
    result = map.get(s[i]) + result


  }
  console.log("result", result);
};
romanToInt("MCMXCIV");
