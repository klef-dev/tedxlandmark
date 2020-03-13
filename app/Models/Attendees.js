const Sequelize = require("sequelize");
const db = require("../../config/database");

const Attendees = db.define("attendees", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reg_no: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tickets: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1000
  },
  paid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = Attendees;
