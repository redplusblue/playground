const path = require("path");
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
      mode: "production",
      // Entry can be an object containing multiple entry points
      entry: "./src/index.js",
      // Source map to identify source of errors
      devtool: "inline-source-map",
      devServer: {
        static: "./dist",
      },
      // HTML webpack plugin generates html file with script tag
      plugins: [
        new HtmlWebpackPlugin({
          title: "Gif-generator",
        }),
      ],
      output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
      },
      module: {
        rules: [
          // For css files
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          // For images
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          // Babel Loader
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [["@babel/preset-env", { targets: "defaults" }]],
              },
            },
          },
        ],
      },
      optimization: {
        runtimeChunk: "single",
      },
    };
