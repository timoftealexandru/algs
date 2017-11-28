
var arr=[]

var helper = function(A,start,end,l){
  if(start===end-1){
    l.push(A)
  } else {
    for(var i=start;i<end;i+=1){
      if(i!==start && A[start] === A[i]) continue
      
      var temp=A[start]
      A[start]=A[i]
      A[i]=temp
      helper(A,start+1,end,l)
      
      temp=A[start]
      A[start]=A[i]
      A[i]=temp
    }
  }
}

var permute = function(A) {
  var l=[]
  helper(A,0,A.length,l)
  return l
}

console.log(permute([1, 2, 3 ]))