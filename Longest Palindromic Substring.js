/*
5. Longest Palindromic Substring
Medium

11197

711

Add to List

Share
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let start = 0;
  let end = 0;
  for ( i = 0; i < s.length; i++) {
      len1 = expandAroundCenter(s, i, i);
      len2 = expandAroundCenter(s, i, i + 1);
      len = Math.max(len1, len2);
      if (len > end - start) {
          start = i - Math.floor((len - 1) / 2);
          end = i + Math.floor(len / 2);
      }
  }
  return s.substring(start, end + 1);

function expandAroundCenter(s, left, right) {
  L = left;
  R = right;
  while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
      L--;
      R++;
  }
  return R - L - 1;
  }
}

my_s = "cbbd";
console.log(longestPalindrome(my_s));