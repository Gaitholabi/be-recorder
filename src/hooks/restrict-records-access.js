/**
 * This hook restricts the request reply data to the authenticated user
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    context.params.query.userId = context.params.user.id;
    return context;
  };
};
