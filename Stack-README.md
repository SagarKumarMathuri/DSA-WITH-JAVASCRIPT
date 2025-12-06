# Stack In JavaScript


## Stack Implementation Using Array
```javascript
class Stack{
    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item)
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack()
stack.push(10)
stack.push(12)
stack.push(13)
stack.push(15)
stack.push(17)
stack.pop()
console.log(stack.peek())
console.log(stack)
```

## Stack Implementation Using Linked List

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "List is already empty"
        }
        const item = this.top.data;
        this.top = this.top.next;
        this.size--;
        return item;
    }

    peek(){
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const stack1 = new StackLinkedList()
stack1.push(10)
stack1.push(12)
stack1.push(14)
console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1)
```

## Practice Questions

1. [Remove All Adjacent Duplicate in String]
2. [Valid Parentheses]
3. [Backspace String Compare]
4. [Next Greater Element 1]
5. [Online Stock Span]
6. [Next Greater Element 2]
7. [Remove K Digits]
8. [Sum of Subarray Minimums]

