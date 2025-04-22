/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
let rotated = nums.slice(-k).concat(nums.slice(0, -k));
 nums.splice(0, nums.length, ...rotated);
};