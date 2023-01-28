const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  performance:{hints:false},
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename:'index.js',
    path:path.resolve(__dirname, "public"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react',{"runtime":"automatic"}]]
          }
        }
      },  // Relevant bit of config for style loader and css loader:
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
            test: /\.(png|j?g|svg|gif)?$/,
            use: [{loader: 'file-loader'}]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          },
        ],
      }
    ]
  },
  devServer: {

    // Serve index.html as the base
   contentBase: path.join(__dirname, "public"),

    // Enable compression
    //compress: true,

    // Enable hot reloading
    hot: true,

    //host:'localhost',

    port: 3000

    // Public path is root of content base
    //publicPath: '/public',

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: 'index.html'
    })
  ],
}