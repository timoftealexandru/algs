// Given a binary tree, return the level order traversal of its nodes’ values. (ie, from left to right, level by level).
//
// Example :
//   Given binary tree
//
// 3
// / \
//   9  20
// /  \
//    15   7
// return its level order traversal as:
//
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

var levelOrder = function(A){
  if(A===null) return null
  var q=[], level=0
  arr=[]
  q.push(A)
  while(true){
    var nodeCount = q.length
    while(nodeCount>0){
      var node = q.shift()
      if(!arr[level]) arr[level]=[node.data]
      else arr[level].push(node.data)
      
      if(node.left)q.push(node.left)
      if(node.right)q.push(node.right)
      nodeCount-=1
    }
    level+=1
    if(!q.length)break
  }
  return arr
}