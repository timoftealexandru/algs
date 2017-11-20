
class newArray extends Array {
  constructor() {
    super()
    this.s2 = new Array()
  }
  push(value) {
    if(value<= this.min()) {
      this.s2.push(value)
    }
    super.push(value)
  }
  
  pop() {
    let value = super.pop()
    if(value === this.min()) {
      this.s2.pop()
    }
    return value
  }
  
  min() {
    if(!this.s2.length) {
      return Number.MAX_SAFE_INTEGER
    } else {
      return this.s2[this.s2.length - 1]
    }
  }
}

let stack = new newArray()
stack.push(3)
stack.push(2)
stack.push(1)
stack.pop()
console.log(stack.min())
