const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inlineSource: ".(js|css)$",
			template: "index.html"
		}),
		new HtmlWebpackInlineSourcePlugin()
	]
};
