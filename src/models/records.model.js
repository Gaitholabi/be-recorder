// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const records = sequelizeClient.define('records', {
    filePath: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  records.associate = function (models) {

    records.belongsTo(models.users, {foreignKey: 'userId'});

  };

  return records;
};
