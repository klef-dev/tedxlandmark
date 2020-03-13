const Sequelize = require("sequelize");
const db = require("../../config/database");

const User = db.define("users", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  is_admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});
module.exports = User;
