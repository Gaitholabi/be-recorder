const users = require('./users/users.service.js');
const records = require('./records/records.service.js');
const stream = require('./stream/stream.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(records);
  app.configure(stream);
};
