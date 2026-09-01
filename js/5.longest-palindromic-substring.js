/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length > 1000 || s.length < 1) {
    return "";
  }
  let slide1 = 0;
  let slide2 = 2;
  console.log("iniciei");
  const longestPalindromeCount = {};
  while (slide2 < s.length) {
    const originalSequence = s.substring(slide1, slide2);
    if (originalSequence === originalSequence.split("").reverse().join("")) {
      longestPalindromeCount[originalSequence] = originalSequence.length;
      slide2 = slide2 + 1;
      slide1 = 0;
      continue;
    }
    slide1 = slide1 + 1;
  }
  console.log(longestPalindromeCount);
};

longestPalindrome("xabax");
