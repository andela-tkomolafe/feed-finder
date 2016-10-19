module.exports = {
 entry: "./app/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?paths=node_modules/&resolve url'
      }
    ]
  },
  output: {
    publicPath: '/',
    filename: "public/bundle.js"
  }
};
