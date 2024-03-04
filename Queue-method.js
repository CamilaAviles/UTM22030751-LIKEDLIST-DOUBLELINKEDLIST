// Define a class for the queue
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Method to remove the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow"; // If the queue is empty
      }
      return this.items.shift();
    }
  
    // Method to view the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue"; // If the queue is empty
      }
      return this.items[0];
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Method to print the queue
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Create an instance of the queue
  const queue = new Queue();
  
  // Add elements to the queue
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  // Print the queue
  console.log("Current Queue: " + queue.printQueue());
  
  // Remove the front element of the queue
  console.log("Removed Front Element: " + queue.dequeue());
  
  // Print the queue after removing an element
  console.log("Queue after removal: " + queue.printQueue());
  
  // Check if the queue is empty
  console.log("Is the queue empty? " + (queue.isEmpty() ? "Yes" : "No"));
  
  // Get the size of the queue
  console.log("Queue size: " + queue.size());
  
  // View the front element of the queue without removing it
  console.log("Front element of the queue: " + queue.front());
  