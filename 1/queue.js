class Queue {
    constructor() {
    //specifying the qualities
     this.items = [];  
     this.head = 0;
     this.tail = -1;
     this.max_size = 10;
    }
    enqueue(newItem) {
        if(this.tail == this.max_size - 1) {
            //when the queue is full
            console.log("Cannot insert into a full queue");
            return;
        } else {
            this.tail += 1;
            this.items.push(newItem);
            //remove log once peek is completed
            console.log(this.items);
            console.log(`Now the tail index is ${this.tail}`);
        }
    }
    dequeue() {
        if(this.tail == -1) {
            console.log("Cannot dequeue from an empty queue");
            return;
        } else {
          const removed = this.items[this.head]; 
          console.log(`Dequeue the item ${removed}`);

          let temp = this.head;

          while (temp < this.tail) {
            temp += 1;
            this.items[temp - 1] = this.items[temp];
          }

          this.items.pop(this.items[temp]);
          this.tail -= 1;
          //remove log after peek is completed
          console.log(this.items);
          return removed;
        }
    }
    peek() {
        if (this.items[this.head] == this.items[this.tail]) {
            console.log("Cannot peek at an empty queue");
        } else {
            console.log(`The head of the queue is ${this.items[this.head]}`);
        }
    }
    length() {
        console.log(`The length of the queue is ${this.items.length}`);
    }
}

const q = new Queue();

for (let i = 0; i < q.max_size; i++) {
    q.enqueue(i);
    console.log(q.items);
}

q.dequeue();
q.peek();
q.length();



