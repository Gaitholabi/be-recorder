const {authenticate} = require('@feathersjs/authentication').hooks;
const writeToDisk = require('../../hooks/write-to-disk');
const restrictRecordsAccess = require('../../hooks/restrict-records-access');
const {disallow} = require('feathers-hooks-common');
const processFile = require('../../hooks/process-file');
const streamValidation = require('../../hooks/stream-validation');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [restrictRecordsAccess()],
    get: [restrictRecordsAccess],
    create: [streamValidation(), writeToDisk()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [processFile()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
