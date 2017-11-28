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
var handler = function(node, arr, level){
  if(node!==null) {
    if(!arr[level])arr[level]=[node.data]
    else arr[level].push(node.data)
    level+=1
    handler(node.left, arr, level)
    handler(node.right, arr, level)
  }
}

//param A : root node of tree
//return a array of array of integers
var levelOrder = function(A){
  if(A===null) return null
  var arr=[]
  handler(A, arr,0)
  return arr
}

