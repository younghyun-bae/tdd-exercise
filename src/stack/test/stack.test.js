const Stack = require('../stack.js');

// Step: Write test code first intending to fail, Check the test error message, and then code implementaion to success that test code.

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allows to push item', () => {
    stack.push('🍌');
    expect(stack.size()).toBe(1);
  })

  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and remove it from the stack', () => {
      stack.push('🍌');
      stack.push('🍓');

      expect(stack.pop()).toBe('🍓');
      expect(stack.size()).toBe(1);
    })
  });

  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item but keeps item in the stack', () => {
      stack.push('🍌');
      stack.push('🍓');

      expect(stack.peek()).toBe('🍓');
      expect(stack.size()).toBe(2);
    })
  })
});