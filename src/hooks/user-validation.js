const Validator = require('feathers-validator');
const feathersErrors = require('@feathersjs/errors');

/**
 * This hook validates the input when creating the account
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    const validator = new Validator(context.data, {
      email: 'required|email',
      password: 'required|min:6'
    });

    const validatorErrors = validator.errors();
    if (Object.keys(validatorErrors).length) {
      throw new feathersErrors.Unprocessable('invalid email or password');
    }

    return context;
  };
};

