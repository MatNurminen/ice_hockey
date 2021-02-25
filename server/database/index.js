const { Pool } = require('pg');

// const CONNECTION_STRING =
//   process.env.DATABASE_URL ||
//   'postgres://tipcealo:TlLI6WiUUyM3FGQrUxgXk7gFtg4O3zsu@hattie.db.elephantsql.com:5432/tipcealo';
// const pool = new Pool({
//   connectionString: CONNECTION_STRING,
// });
// //const SSL = process.env.NODE_ENV === 'production';

const CONNECTION_STRING =
  process.env.DATABASE_URL || 'postgres://user:user@192.168.10.23:5432/hockey';

const pool = new Pool({
  connectionString: CONNECTION_STRING,
});

// class Database {
//   constructor() {
//     this._pool = new Pool({
//       connectionString: CONNECTION_STRING,
//       ssl: SSL,
//     });

//     this._pool.on('error', (err, client) => {
//       console.error('Unexpected error on idle PostgreSQL client', err);
//       process.exit(-1);
//     });
//   }

//   //query(query, ...args) {
//   query(query, args) {
//     this._pool.connect((err, client, done) => {
//       if (err) throw err;
//       //const params = args.length === 2 ? args[0] : [];
//       //const callback = args.length === 1 ? args[0] : [1];

//       //client.query(query, params, (err, res) => {
//       client.query(query, args, (err, res) => {
//         done();
//         if (err) {
//           console.log(err.stack);
//           //return callback({ error: 'Database error' }, null);
//           return args({ error: 'Database error' }, null);
//         }
//         //callback({}, res.rows);
//         args({}, res.rows);
//       });
//     });
//   }

//   end() {
//     this._pool.end();
//   }
// }

// module.exports = new Database();
module.exports = pool;
