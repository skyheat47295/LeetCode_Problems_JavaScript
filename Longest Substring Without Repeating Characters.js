/*
3. Longest Substring Without Repeating Characters
Medium

14826

757

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if(s.length === 0 || s === null) return 0
  const map ={}, len = s.length
  let l=0, r=0,max=0
  for(;r<len; r++){
    let ch = s.charAt(r)
    map[ch] ? map[ch]++ : map[ch] = 1
    while(map[ch]>1 && l<r){
      map[s.charAt(l)]--
      l++
    }
    // console.log(map)
    max=Math.max(max,r-l+1)
  }
  return max    

}

my_s = "pwwkew";
console.log(lengthOfLongestSubstring(my_s));