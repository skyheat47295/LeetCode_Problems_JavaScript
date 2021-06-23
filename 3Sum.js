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
    nums.sort();
    const triplets = [];
    
    for (let i = 0; i < nums.length -2; i++) {
        let j = i+1, k = nums.length-1, sum = 0;
        while ( j < k) {
            sum = nums[i] + nums[j] + nums[k];
            if (sum === 0 ) {
                triplets.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) j++;
            else k--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return triplets;
};

const myNums = [-1,0,1,2,-1,-4];
console.log(threeSum(myNums))
console.log('Done');