module.exports = {
 entry: "./app/app.js",
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: ['babel'],
      query: { presets: [ 'es2015', 'react' ] }
    }]
  },
  output: {
    publicPath: '/',
    filename: "public/bundle.js"
  }
};
