// Print concentric rectangular pattern in a 2d matrix.
//   Let us show you some examples to clarify what we mean.
//
//   Example 1:
//
// Input: A = 4.
// Output:
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4
// Example 2:
//
// Input: A = 3.
// Output:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

var prettyPrint = function(A) {
  var matrix=[]
  var length = (A-1)*2 +1
  for(var i=0; i<length; i+=1 ){
    for(var j=0; j<length; j+=1){
      matrix[i] = new Array(length)
    }
  }
  for(var i=0; i<length; i+=1 ){
    for(var j=0; j<length; j+=1){
      matrix[i][j]= Math.max(Math.abs(i-(A-1)), Math.abs(j-(A-1))) + 1
    }
  }
  return matrix
}

console.log(prettyPrint(10))