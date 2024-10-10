class Stack {
    constructor() {
        this.items = [];
        this.max_size = 5;
    }
    push(x) {
        if (this.items.length == this.max_size) {
            console.log("Cannot add to a full stack");
            return;
        } else {
            console.log(`${x} has been added to the stack`);
            return this.items.push(x);
        }
    }
    pop() {
        if (this.items.length == 0) {
            console.log("Cannot remove from an empty stack");
            return;
        } else {
            console.log(`${this.items[this.items.length - 1]} has been popped`)
            return this.items.pop();
             

        }
    }
    peek() {
        if (this.items.length !== 0) {
            console.log(`The top value of the stack is ${this.items[this.items.length - 1]}`);
            return this.items[this.items.length - 1];
        } else {
            console.log("Cannot peek at empty stack");
            return;
        }
    }
    length() {
        console.log(`The height of the stack is ${this.items.length}`);
        return this.items.length;
    }
}

const s = new Stack;

for (let i=0; i < s.max_size; i++) {
    s.push(i + 1);
    console.log(s.items);
}

s.pop();
console.log(s.items);
s.peek();
s.length();