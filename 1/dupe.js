/* Question 5. Design an algorithm to continuously remove adjacent duplicate letters from 
a string until no adjacent duplicates remain, using a Stack or a Queue. Can you also implement 
this using the alternative ADT?
(Example: Convert “abbccd” to “ad”, “dsallasg” to “dg”, and “abccbadd” toanempty string.) */


//code for stack

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

const st = new Stack;

let str = "abbccd";

const arr = Array.from(str.split(""));

console.log(arr);

for (let i=0; i<arr.length; i++) {
    if(st.items.length == 0 || st.items[st.items.length -1] !== arr[i]) {
        st.items.push(arr[i]);
    }
}

console.log(`String with duplicates removed: ${st.items.join('')}`);


