// [value, next] -> [value, next] -> [value, next]
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(data) {
    const node = new Node(data)
    if (this.tail) {
      this.tail.next = node
    }
    if (!this.head) {
      this.head = node
    }
    this.tail = node
  }

  appendAfter(after, data) {
    let found = this.find(after)
    if (!found) {
      return false
    }
    this.tail === found
      ? this.append(data)
      : (found.next = new Node(data, found.next))
    return true
  }

  prepend(data) {
    const node = new Node(data, this.head)
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
  }

  find(data) {
    if (!this.head) {
      return null
    }
    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
    return null
  }

  remove(data) {
    if (!this.head) {
      return false
    }
    while (this.head.data === data) {
      this.head = this.head.next
    }
    if (this.head === null) {
      this.tail = null
      return true
    }
    let current = this.head
    while (current.next) {
      current.next.data === data
        ? (current.next = current.next.next)
        : (current = current.next)
    }
    if (this.tail.data === data) {
      this.tail = current
    }
  }

  toArray() {
    const output = []
    let current = this.head
    while (current) {
      output.push(current.data)
      current = current.next
    }
    return output
  }
}

const list = new LinkedList()
list.append('1')
list.prepend('2')
list.append('3')
list.append('4')
list.appendAfter('2', '5')
list.remove('3')
console.log(list)
console.log(list.toArray())
console.log(list.find('3'))
