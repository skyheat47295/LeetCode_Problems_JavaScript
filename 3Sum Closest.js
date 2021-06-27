/*
16. 3Sum Closest
Medium

3546

183

Add to List

Share
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    if (nums.length < 3 || nums.length >= (10 ** 3)) return [];
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length -2; i++) {
        let j = i+1, k = nums.length-1, sum = 0;
        while ( j < k) {
            sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
            //while (nums[j] === nums[j + 1]) j++;
            //while (nums[k] === nums[k - 1]) k--;
            if (sum < target) j++;
            else k--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return closestSum;
};

const myNums = [-1,2,1,-4];
console.log(threeSumClosest(myNums, 1))
console.log('Done');