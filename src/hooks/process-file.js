/**
 * This hook is reserved to process the data after the insertion to memory
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    return context;
  };
};
