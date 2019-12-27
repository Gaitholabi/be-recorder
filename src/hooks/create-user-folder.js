
const fs = require('fs');
const feathersErrors = require('@feathersjs/errors');

/**
 * This hook creates a new directory with the user id in the storage directory
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    if (!fs.existsSync(`storage/records/${context.result.id}`)) {
      fs.mkdir(`storage/records/${context.result.id}`, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("new user directory created");
          }
        }
      );
    }
    return context;
  };
};
