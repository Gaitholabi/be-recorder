/**
 * This hook sets the limit for the retrieved records to 25
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    context.params.query.$limit = 25;
    return context;
  };
};
