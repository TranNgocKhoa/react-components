const path = require("path");

module.exports = {
    entry: {
        app: "./example/app.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./example/dist")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //.js or .jsx at the end
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        contentBase: path.join(__dirname, "./example"),
        compress: true
    },
};