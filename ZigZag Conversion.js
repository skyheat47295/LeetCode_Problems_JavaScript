/*
6. ZigZag Conversion
Medium

2439

5981

Add to List

Share
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (s.length < numRows || numRows === 1) return s;
    const zigZag = Array(numRows).fill().map(() => Array()) // create a blank array of numRows columns
    let currentRow = 0
    let zig = true; // zig -> down !zig (zag) up
    let final = '';
    for (let sChar = 0; sChar < s.length; sChar++) {
        zigZag[currentRow].push(s[sChar]);
        if (zig) {
            currentRow ++;
        } else {
            currentRow --;
        }
        if (currentRow === numRows -1 || currentRow === 0) zig = !zig;
    }
    zigZag.forEach(char => final += char.join(''));
    return final;
};

my_s = "AB"
console.log(convert(my_s, 1))
console.log('Done');