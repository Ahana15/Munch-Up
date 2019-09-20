const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: ''
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
};
