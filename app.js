require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


// serve static files later

app.get('/', function (req, res) {
  
});


var config = require('./knexfile.js').development;

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



var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})