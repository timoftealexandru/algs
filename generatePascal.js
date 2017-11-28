// Given numRows, generate the first numRows of Pascal’s triangle.
//
//   Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.
//
// Example:
//
//   Given numRows = 5,
//
//   Return
//
//     [
//       [1],
//       [1,1],
//       [1,2,1],
//       [1,3,3,1],
//       [1,4,6,4,1]
//     ]

var generate = function(A) {
  if(A===0)return []
  if(A==1) return [[1]]
  if(A==2) return [[1],[1,1]]
  var row=1, res=[[1],[1,1]]
  while(row<A-1) {
    var newRow=[]
    newRow.push(1)
    for(var i=1;i<=row ;i+=1) {
      newRow.push(res[row][i-1] + res[row][i])
    }
    newRow.push(1)
    res.push(newRow)
    row += 1
  }
  return res
}

console.log(generate(5))