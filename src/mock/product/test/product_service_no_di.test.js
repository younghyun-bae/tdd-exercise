const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client.js');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍌', available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    //if clearMocks: false, declare like below
    //fetchItems.mockClear();
    //ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }]);
  })

  it('test example to check mockClear', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  })
});