const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

function modify(buffer) {
  // copy-webpack-plugin passes a buffer
  var manifest = JSON.parse(buffer.toString());

  // make any modifications you like, such as
  manifest.name = "Youtube Accelerator";
  manifest_JSON = JSON.stringify(manifest, null, 2);
  return manifest_JSON;
}

module.exports = {
  entry: {
    "youtube/homepage": ["./youtube/homepage.js"],
    "youtube/video": ["./youtube/video.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./manifest.json",
          transform(content, path) {
            return modify(content);
          },
        },
        { from: "assets/icons/", to: "assets/icons/" },
        { from: "youtube/utils.js", to: "youtube/utils.js" },
      ],
    }),
  ],
};
