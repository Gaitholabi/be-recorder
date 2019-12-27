const fs = require('fs');
/**
 * This hook writes the streamed file into disk
 * @param options
 * @returns {function(*): *}
 */
module.exports = function (options = {}) {
  return async context => {
    const {data} = context;
    const {params} = context;
    data.userId = params.user.id;
    if (!fs.existsSync(`storage/records/${params.user.id}/${data.filename}`)) {
      context.app.service('records').create({
        filePath: `${data.filename}`,
        userId: params.user.id
      });
    }
    console.log(`record recieved from user id: ${params.user.id}`);
    const dataBuffer = Buffer.from(data.file, 'base64');
    fs.appendFile(`storage/records/${params.user.id}/${data.filename}`, dataBuffer, (err) => {
      if (err) {
        throw err;
      }
    });

    return context;
  };
};
