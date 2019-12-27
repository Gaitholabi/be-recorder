const errors = require('@feathersjs/errors');

/**
 * This hooks adds the user into the record-user relationship, and  disallows the creation of new record through rest
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    if (context.params.provider) {
      throw new errors.Forbidden('Unauthorized operation');
    }
    return context;
  };
};
