// Initializes the `stream` service on path `/stream`
const createService = require('feathers-memory');
const hooks = require('./stream.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  app.use('/stream', createService(options));
  const service = app.service('stream');

  service.hooks(hooks);
};
