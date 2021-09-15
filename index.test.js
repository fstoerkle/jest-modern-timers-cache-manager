const { caching } = require('cache-manager');

const cache = caching({ store: 'memory' });

async function getValue(key) {
  const value = await cache.wrap(key, () => 'cached value');

  return value;
}


test('times out', async () => {
  const value = await getValue('my-key');

  expect(value).toEqual('cached value');
});
