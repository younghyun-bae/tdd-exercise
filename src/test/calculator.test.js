const Calculator = require('../calculator.js');

//like this?
// test('add', () => {});
// test('sub', () => {});
//no!

//Using describe() instead of repeating the same test()s

// const cal = new Calculator();
// Using beforeEach() or afterEach() to ensure the each test code working indepentdently and not to repeat the same variables

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  })

  // Testing is Useful to document

  // 0/0 =/= 0 !!!
  // n/0 =/= 0 !!!
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});


