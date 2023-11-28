const { Stack } = require('./dataStructures');

// Example usage
const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');

console.log('Stack peek:', stack.peek());
console.log('Stack size:', stack.size());
console.log('Stack is empty:', stack.isEmpty());

const poppedElement = stack.pop();
console.log('Popped element:', poppedElement);
console.log('Stack size:', stack.size());