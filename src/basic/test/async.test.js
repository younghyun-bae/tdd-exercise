const fetchProduct = require('../async.js');

describe('Async', () => {
  //Using done method
  it('async', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  //Using return method - Cleaner! faster!
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  // await: async method
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  // resolves method
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    });
  });

  // rejects method
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});