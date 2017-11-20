function print_subset(subset) {
  console.log(subset)
}

function helper (given_array, subset, i) {
  if (i===given_array.length) print_subset(subset)
  else {
    subset[i] = null
    helper(given_array, subset, i+1)
    subset[i] = given_array[i]
    helper(given_array, subset, i+1)
  }
}

function main(array) {
  let subset = new Array(array.length)
  helper(array, subset, 0)
}

main([1,2,3,4])