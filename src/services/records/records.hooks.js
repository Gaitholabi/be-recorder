const {authenticate} = require('@feathersjs/authentication').hooks;

const restrictRecordsAccess = require('../../hooks/restrict-records-access');

const populateUser = require('../../hooks/populate-user');


const disablePagination = require('../../hooks/disable-pagination');

const {disallow} = require('feathers-hooks-common');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [restrictRecordsAccess(), disablePagination()],
    get: [restrictRecordsAccess(), disablePagination()],
    create: [populateUser()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
