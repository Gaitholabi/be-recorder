const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const restrictRecordsAccess = require('../../src/hooks/restrict-records-access');

describe('\'restrict-records-access\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: restrictRecordsAccess()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
