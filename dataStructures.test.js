const { Stack } = require('./dataStructures');

test('Stack should push elements', () => {
  const stack = new Stack();
  stack.push('a');
  stack.push('b');

  expect(stack.size()).toBe(2);
  expect(stack.peek()).toBe('b');
});

test('Stack should pop elements', () => {
  const stack = new Stack();
  stack.push('a');
  stack.push('b');

  const poppedElement = stack.pop();

  expect(poppedElement).toBe('b');
  expect(stack.size()).toBe(1);
});

test('Stack should check if it is empty', () => {
  const stack = new Stack();

  expect(stack.isEmpty()).toBe(true);

  stack.push('a');

  expect(stack.isEmpty()).toBe(false);
});

test('Stack should return the correct size', () => {
  const stack = new Stack();

  expect(stack.size()).toBe(0);

  stack.push('a');
  stack.push('b');

  expect(stack.size()).toBe(2);
});