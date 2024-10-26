class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const total = x + y + carry;
    carry = Math.floor(total / 10);
    current.next = new ListNode(total % 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    current = current.next;
  }

  return dummyHead.next;
}

// Example usage:
// Example 1
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addTwoNumbers(l1, l2);
// Print the result
let current = result;
while (current) {
  console.log(current.val);
  current = current.next;
}
// Output: 7 0 8

// Example 2
const l1 = new ListNode(0);
const l2 = new ListNode(0);
const result = addTwoNumbers(l1, l2);
// Print the result
let current = result;
while (current) {
  console.log(current.val);
  current = current.next;
}
// Output: 0

// Example 3
const l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
const result = addTwoNumbers(l1, l2);
// Print the result
let current = result;
while (current) {
  console.log(current.val);
  current = current.next;
}
// Output: 8 9 9 9 0 0 0 1
