const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.js'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    },
    {
      test: /\.css$/,
      loader:[ 'style-loader', 'css-loader' ]
     },
     {
      test: /\.(gif|svg|jpg|png)$/,
      loader: "file-loader",
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx','.css']
  },
  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: false
};