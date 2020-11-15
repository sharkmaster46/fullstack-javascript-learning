const path = require('path');

module.exports = {
    entry: './scr/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};