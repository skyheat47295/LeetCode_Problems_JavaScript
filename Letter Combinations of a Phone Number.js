/*
17. Letter Combinations of a Phone Number
Medium

6593

547

Add to List

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (digits.length === 0) return digits;
      
    const phoneMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    };

    let letterCombos = [];
    let digitArray = digits.split('');
    if (digitArray.length > 1) {
        let letters = '';
        for (index1 = 0; index1 < phoneMap[digitArray.slice(-2,-1)].length ; index1++) {
            //letters += (phoneMap[digitArray.slice(-2,-1)][index1]);
            for (index2 = 0; index2 < phoneMap[digitArray.slice(-1)].length; index2++) {
                letterCombos.push(phoneMap[digitArray.slice(-2,-1)][index1] + phoneMap[digitArray.slice(-1)][index2]);
            };
            //letterCombos.push(letters + phoneMap[digitArray.slice(-1)][index1]);
        };
    return letterCombos;
    } else {
        return phoneMap[digits];
    }
};

const mydigits = "2569";
console.log('answer');
console.log(letterCombinations(mydigits));
console.log('Done');