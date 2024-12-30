const Calculator = require('../calculator.js');

//like this?
// test('add', () => {});
// test('sub', () => {});
//no!

//Using describe() instead of repeating the same test()s

describe('Calculator', () => {
  it('inits with 0', () => {
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    const cal = new Calculator();
    cal.set(9);
    expect(cal.value).toBe(9);
  })
})
