const ProductClient = require('./product_client');
class ProductService {
  // brocken dependency injection rule - not to define dependency inside of class itself
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
