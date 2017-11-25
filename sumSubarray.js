// Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if(nums.length===0) return false
  var sum=0
  for(var i=0;i<nums.length;i+=1) {
    for(var j=i; j<nums.length; j+=1){
      sum+=nums[j]
      if((sum % k===0 || (sum===0 && k===0))&& j-i+1>=2){
        return true
      }
    }
    sum=0
  }
  return false
};