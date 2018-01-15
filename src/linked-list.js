function Node(element) {
  this.element = element;
  this.next = null;
}

export default class LList {

  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currNode = this.head;

    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);

    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    let currNode = this.head;

    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  remove(item) {
    let prevNode = this.findPrevious(item);

    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;

    while (!(currNode.next == null) && (currNode.next.element !== item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

}
