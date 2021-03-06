const path = require('path');

 module.exports = {
     entry: './client/index.js',
     output: {
         path: path.resolve(__dirname, 'public/dist'),
         filename: 'bundle.js'
     },
     module: {
      loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }]
      }
 };