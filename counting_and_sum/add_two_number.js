class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const addTwoNumbers = function(list1, list2) {
  return addTwoNumbersRecursive(list1, list2, 0);
};

function  addTwoNumbersRecursive(list1, list2, carryOver) {
  if(carryOver === 0 && !list1 && !list2) {
    return null;
  }

  const l1Val = list1?.val || 0;
  const l2Val = list2?.val || 0;

  let sum = l1Val + l2Val + carryOver;
  carryOver = Math.floor(sum / 10);

  sum = sum % 10;

  return new ListNode(sum, addTwoNumbersRecursive(list1?.next, list2?.next, carryOver));
}

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);


const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2));