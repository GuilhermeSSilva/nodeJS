const knex = require('knex');
const path = require('path');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve('database', 'database.sqlite')
  },
  useNullAsDefault: true,
});

module.exports = db;