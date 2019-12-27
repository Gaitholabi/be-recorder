const Validator = require('feathers-validator');
const feathersErrors = require('@feathersjs/errors');

module.exports = function (options = {}) {
  return async context => {
    const validator = new Validator(context.data, {
      filename: 'required',
      file: 'required'
    });

    const validatorErrors = validator.errors();
    if (Object.keys(validatorErrors).length) {
      throw new feathersErrors.Unprocessable('invalid entry');
    }

    return context;
  };
};
