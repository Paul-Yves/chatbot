var path = require('path');

module.exports = {
    entry: './js/main.jsx',
    output: {
        path: path.resolve(__dirname, 'app/assets/javascripts'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
