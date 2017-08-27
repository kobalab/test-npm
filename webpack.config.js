const path = require('path');

module.exports = {
  entry: ['./src/js/hello.js',
          './src/js/hello/en.js','./src/js/hello/ja.js','./src/js/hello/zh.js'],
  output: {
    filename: 'hello.js',
    path: path.resolve(__dirname, 'www/js/')
  }
}
