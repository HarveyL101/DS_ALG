class Node {
    constructor(el) {
        this.el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(val) {

        node = new Node(val);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    search() {

    }

    delete() {

    }

    traverse() {

    }
}