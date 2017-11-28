// Given an integer array, find if an integer p exists in the array such that the number of integers greater than p in the array equals to p
// If such an integer is found return 1 else return -1.

var solve = function(A){
  var n=A.length
  A = A.sort()
  if(A[n-1]===0) return 1
  for(var i=0; i<n-1; i++) {
    if(A[i]===A[i+1]) continue
    if(A[i]=== n-i-1) return 1
  }
  return -1
}

console.log(solve([-4, -2, 0, -1, -6]))