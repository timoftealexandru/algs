// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  var hashMap={},sum=0,count=0
  hashMap[0]=1
  for(var i=0; i<nums.length; i+=1) {
    sum+=nums[i]
    if (hashMap[sum-k]){
      count += hashMap[sum-k]
    }
    hashMap[sum] = hashMap[sum]? hashMap[sum]+1 : 1
  }
  return count
};

console.log('res',subarraySum([1,1,1],2))