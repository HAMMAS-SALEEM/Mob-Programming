class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head=null;
    this.tail=null;
    this.size=0;
  }
  add(number) {
    // your code here
    const node = new Node(number)
    if(this.head===null) {
      this.head=node;
      this.tail=node;
    } else {
    this.tail.next_node=node;
    this.tail=node;
    }
    this.size++;
    return(this.size)
  }


  get(index) {
    if(index==0) {
      return this.head.value
    }
    let current = this.head
    for(let i=0; i<this.size; i++){
    if(i===index) {
      return current.value
    }
    current=current.next_node
    }
}
}

const list = new LinkedList();

list.add(3)
list.add(5)
list.add(7)
list.add(9)
// => 5
console.log(list.get(2))
console.log(list.get(3))
list.add(11)
console.log(list.get(4))





module.exports = LinkedList;