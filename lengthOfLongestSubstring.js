/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let right = 0;
  let left = 0;
  let size = 0;
  const seen = new Set();

  while (right < s.length) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      size = Math.max(size, right - left + 1);
      right++;
    } else {
      seen.delete(s[left]);
      left++;
    }
  }
  console.log(size);
  return size;
};

const s = "abcabcbb";
lengthOfLongestSubstring(s);
