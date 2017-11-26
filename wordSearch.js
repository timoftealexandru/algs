// Given a 2D board and a word, find if the word exists in the grid.
//
//   The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if(word.length > board.length * board[0].length) return false
  for(var i=0; i<board.length; i+=1){
    for(var j=0;j<board[0].length; j+=1){
      if(board[i][j]===word[0]){
        if(isFound(board,word,i,j,0)) {
          return true
        }
      }
    }
  }
  return false;
};

var isFound = function(board,word,i,j,k){
  var n=board.length, m=board[0].length
  
  if(i<0 || j<0 || i>=n || j>=m) return false
  
  if(word[k] === board[i][j]) {
    var temp = board[i][j]
    board[i][j] = '#'
    if (word.length === k + 1) return true
    else if (isFound(board, word, i + 1, j, k + 1) ||
      isFound(board, word, i, j + 1, k + 1) ||
      isFound(board, word, i - 1, j, k + 1) ||
      isFound(board, word, i, j - 1, k + 1)) return true
    board[i][j] = temp
  }
  return false
}

console.log("found", exist([
  ["C","A","A"],
  ["A","A","A"],
  ["B","C","D"]], "AAB"))