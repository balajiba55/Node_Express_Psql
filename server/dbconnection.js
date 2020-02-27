const Pool = require('pg').Pool
const pool = new Pool({
  user: 'api_user',
  host: 'localhost',
  database: 'psqldatabase',
  password: 'password',
  port: 5432,
})

module.exports = pool;