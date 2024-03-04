// Define a class for the stack
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Method to remove the top element of the stack
    pop() {
      if (this.items.length === 0) {
        return "Underflow"; // If the stack is empty
      }
      return this.items.pop();
    }
  
    // Method to view the top element of the stack without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Method to print the stack
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Create an instance of the stack
  const stack = new Stack();
  
  // Add elements to the stack
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  // Print the stack
  console.log("Current Stack: " + stack.printStack());
  
  // Remove the top element of the stack
  console.log("Removed Top Element: " + stack.pop());
  
  // Print the stack after removing an element
  console.log("Stack after removal: " + stack.printStack());
  
  // Check if the stack is empty
  console.log("Is the stack empty? " + (stack.isEmpty() ? "Yes" : "No"));
  
  // Get the size of the stack
  console.log("Stack size: " + stack.size());
  
  // View the top element of the stack without removing it
  console.log("Top element of the stack: " + stack.peek());
  