// First Recurring Character

function helper(string) {
  let set = new Set()
  let chars = string.split('')
  for (let i=0; i< string.length; i++) {
    if(set.has(string[i])) {
      return string[i]
    }
    set.add(string[i])
  }
  return null
}

console.log(helper("abcbc"))