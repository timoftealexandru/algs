/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root==null) return []
  var res = new Array()
  var stack = new Array()
  var current = root
  while(current !== null && stack.length !== 0){
    while (current.left !== null){
      stack.push(current)
      current = current.left
    }
    res.push(stack.shift())
    current = current.right
  }
  return res
};
