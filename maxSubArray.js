// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
//   For example:
//
//   Given the array [-2,1,-3,4,-1,2,1,-5,4],
//
//   the contiguous subarray [4,-1,2,1] has the largest sum = 6.
//
// For this problem, return the maximum sum.

var maxSubArray = function(A){
  var max_sum=A[0], current_sum=0
  for(var i=0;i<A.length; i+=1) {
    current_sum +=A[i]
      if (current_sum > max_sum) {
        max_sum = current_sum
    }
    if (current_sum < 0) {
      current_sum = 0
    }
  }
  return max_sum
}

console.log(maxSubArray([-5,-2,-8,-6]))