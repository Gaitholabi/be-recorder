// Initializes the `records` service on path `/records`
const createService = require('feathers-sequelize');
const createModel = require('../../models/records.model');
const hooks = require('./records.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  app.use('/records', createService(options));
  const service = app.service('records');

  service.hooks(hooks);
};
