const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"], // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/, // Sẽ sử dụng babel-loader cho những file .js
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv({
      path: "./.env", // default is .env
    }),
  ],
};
