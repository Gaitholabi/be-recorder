const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const writeToDisk = require('../../src/hooks/write-to-disk');

describe('\'write-to-disk\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: writeToDisk()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
