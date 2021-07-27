const test = require('tape');

class Node {
  constructor(value, next=null) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  print(){
    var nextNode = this.head;
    while(nextNode !== null) {
      console.log(nextNode.value);
    }
  }
}

test('Linked List', (t) => {
  const myList = new LinkedList();
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  myList.head = node1;
  node1.next = node2;
  node2.next = node3;

  t.equal(myList.head.value, 1, 'head matches');
  t.equal(myList.head.next.value, 2, 'next matches');
  t.equal(myList.head.next.next.value, 3, 'next matches');
  t.end();
});






