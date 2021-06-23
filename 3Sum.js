/*
15. 3Sum
Medium

11269

1125

Add to List

Share
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if (nums.length < 0 || nums.length >3000) return [];
    const triplets = [];
    let whichIsLower = 0;

    for (let i = 0; i < nums.length -2; i++) {
        let begin = i + 1, end = nums.length -1, sum = 0;
        while ( begin < end) {
            sum = nums[i] + nums[begin] + nums[end];
            if (sum === 0) {
                triplets.push([nums[i], nums[begin], nums[end]]);
                while (nums[begin] === nums[begin + 1]) begin++;
                while (nums[end] === nums[end - 1]) end--;
            }
            whichIsLower = Math.min(nums[begin],nums[end]);
            if (sum < 0 && nums.indexOf(whichIsLower) === begin) {
                begin++;
            } else end--;
            /*if (sum > 0 && nums.indexOf(whichIsLower) === begin) {
                end--
            } else begin++; try just one for now. */
        }
    }
    return triplets;
};

const myNums = [-1,0,1,2,-1,-4];
console.log(threeSum(myNums))
console.log('Done');