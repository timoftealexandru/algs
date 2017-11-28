// Implement int sqrt(int x).
//
// Compute and return the square root of x.
//
//   If x is not a perfect square, return floor(sqrt(x))
//
// Example :
//
//   Input : 11
// Output : 3

//TLE
var sqrt = function(A) {
  var i=0
  while(i*i<A){
    i+=1
    console.log("i=",i)
  }
  return i-1
}
console.log(sqrt(11))