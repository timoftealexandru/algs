// Find the longest increasing subsequence of a given sequence / array.
//
//   In other words, find a subsequence of array in which the subsequence’s elements are in strictly increasing order, and in which the subsequence is as long as possible.
//   This subsequence is not necessarily contiguous, or unique.
//   In this case, we only care about the length of the longest increasing subsequence.
//
//   Example :
//
// Input : [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
// Output : 6
// The sequence : [0, 2, 6, 9, 13, 15] or [0, 4, 6, 9, 11, 15] or [0, 4, 6, 9, 13, 15]

var lis = function(A){
  var n=A.length, max_length=0, lis=[]
  for(var i=0;i<n;i+=1)lis[i]=1
  
  for(var i=0;i<n;i+=1){
    for(var j=0;j<i;j+=1)
      if(A[j]<A[i] && lis[i] < lis[j] + 1) {
        console.log("i:",A[i], lis[i])
        console.log("j:",A[j], lis[j])
        lis[i] = lis[j]+1
      }
  }
  console.log(lis)
  for(var i=0;i<n;i+=1) max_length=Math.max(max_length, lis[i])
  return max_length
}

console.log(lis([10, 22, 9, 33, 21, 50, 41, 60]))
