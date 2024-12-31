class StubProductClient {
  async fetchItems() {
    // real same class but no need to depend on network, just return value
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ];
  }
}

module.exports = StubProductClient;