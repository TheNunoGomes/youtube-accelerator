const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

function modify(buffer) {
    // copy-webpack-plugin passes a buffer
    var manifest = JSON.parse(buffer.toString());
 
    // make any modifications you like, such as
    manifest.name = "Youtube Accelerator";
 
    // pretty print to JSON with two spaces
    manifest_JSON = JSON.stringify(manifest, null, 2);
    return manifest_JSON;
}
 
module.exports = {
    entry: {
        "youtube/homepage.js": './youtube/homepage.js',
        "youtube/video.js": './youtube/video.js',
        "style.css": './style.css',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]',
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: '/node_modules/', 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                        ]
                    }
                } 
            },
            { 
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { 
                    from: "./manifest.json",
                    transform (content, path) {
                        return modify(content)
                    }
                },
                { from: "assets/", to: "assets/" },
            ],
        })
    ,],
};