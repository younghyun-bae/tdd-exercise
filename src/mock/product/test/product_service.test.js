const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    //Arrange, Given
    productService = new ProductService(new StubProductClient());
  });

  it('should filter oout only available items', async () => {
    //Act, When
    const items = await productService.fetchAvailableItems();
    //Assert, Then
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  });
});