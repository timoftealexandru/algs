// Given a binary tree, return the inorder traversal of its nodes' values.

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
  helper(root, res)
  return res
};

var helper = function (node, res) {
  if(node !== null) {
    if(node.left !== null){
      helper(node.left,res)
    }
    res.push(node.val)
    if(node.right !== null) {
      helper(node.res)
    }
  }
}