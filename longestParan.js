// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
//
//   For "(()", the longest valid parentheses substring is "()", which has length = 2.
//
// Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if(s==="") return 0
  var max_length=0, stack = []
  stack.push(-1)
  for(var i=0; i<s.length;i+=1) {
    if(s[i] ==='(') stack.push(i)
    else{
      var top = stack.pop()
      if(stack.length===0) {
        stack.push(i)
      } else {
        max_length = Math.max(max_length, i-stack[stack.length-1])
      }
    }
  }
  return max_length
};
