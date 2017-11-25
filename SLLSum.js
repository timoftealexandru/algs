/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var carry=0, sum, head = new ListNode(0),curr = head, p=l1,q=l2
  while(p !== null || q!==null) {
    var x = p===null? 0: p.val
    var y = q===null? 0: q.val
    var sum = carry + x + y
    carry=sum>9 ? 1:0
    curr.next = new ListNode(sum%10)
    curr=curr.next
    if(p !==null) p=p.next
    if(q !==null) q=q.next
  }
  
  if(carry>0) {
    curr.next = new ListNode(carry)
  }
  
  return head.next
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}