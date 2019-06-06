const path = require('path');
console.log('__dirname' ,__dirname);
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}