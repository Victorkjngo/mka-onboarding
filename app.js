// SERVER SIDE CODE
require('dotenv').config();

// var db = require('./database/helpers.js');
// var Bookshelf = require('./bookshelf.js');
var config = require('./knexfile.js').development;
// const { Client } = require('pg')
// const client = new Client()

// client.connect()

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// });

console.log('Congif', config);
var knex = require('knex')({ // should initialize connection to db
  client: 'pg',
  connection: {
    host: 'localhost',
    user:     'vngo',
    password: '',
    database: 'vngo'
  },
  debug: true,
  pool: {
    min: 0,
    max: 7,
    afterCreate: function (conn, done) {
      console.log('Whoo connected!');
    }
  }
});

// console.log(knex('table').insert({a: 'b'}).returning('*').toString());

knex.table('details', _ => {
  console.log('Select a TABLE!');  
});

knex.schema.createTable('details', function (table) {

  console.log('Created table');
  // table.increments();
  // table.string('name');
  // // TODO need to create more field here
  // var Bookshelf = require('bookshelf')(knex);
  
  // var User = Bookshelf.Model.extend({
  //   tableName: 'details'
  // });
  
  // var myUser = new User({
  //   user: 'vngo',
  //   pass: 'pass',
  //   email: 'victor@gmail.com'
  // }).save().then(_ => {
  //   console.log('Thing is saved!');
  // });

});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});

var myUser = new User({
  user: 'Name',
  pass: 'Word'
}).save().then(_ => {
  console.log('Time to take a break!');
});