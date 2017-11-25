// Given a binary tree, determine if it is a valid binary search tree (BST).
//
//   Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null ) return true
  
  return checkBST(root.left, Number.MIN_SAFE_INTEGER, root.val)
    && checkBST(root.right, root.val, Number.MAX_SAFE_INTEGER)
};

var checkBST = function (root, min, max) {
  if(root === null) return true
  if(root.val<=min || root.val >= max)
    return false
  
  return checkBST(root.left, min, root.val)
    && checkBST(root.right, root.val, max)
}