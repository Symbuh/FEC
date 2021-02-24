const path = require('path');

module.exports = {
    mode: 'development',
    // The mode lets us add webpack to our start scripts.
    entry: './src/index.js',
    // Entry point where reactdom.render is called.
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
}