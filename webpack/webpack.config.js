const path = require('path')

module.exports = {
    entery: './src/main.js',
    output: {
        path: path.join(_dirname,"dist"),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
}