class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
        this.max_size = 5;
    }
    push(x) {
        if (this.top == this.max_size -1) {
            console.log("Cannot add to a full stack");
            return;
        } else {
            this.items.push(x);
            this.top_item += 1;
            console.log(`${x} has been added to the stack`);
        }
    }
    pop() {
        if (this.items.length == 0) {
            console.log("Cannot remove from an empty stack");
        } else {
            console.log(`${this.items[-1]} was removed from the stack`);
            this.items.pop();
            this.top_item -= 1;
        }
    }
    peek() {
        if (this.items.length !== 0) {
            console.log(`The top value of the stack is ${this.items[this.items.length]}`);
        } else {
            console.log("Cannot peek at empty stack");
        }
    }
    length() {

    }
}

const s = new Stack;

for (let i=0; i < s.max_size; i++) {
    s.push(i);
    console.log(s.items);
}
s.pop();
s.peek();