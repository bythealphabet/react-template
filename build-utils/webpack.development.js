module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
	return {
		devtool: "source-map",
		devServer: {
			contentBase: "./dist",
			publicPath: "/dist",
			port: 3000,
			hot: true,
		},
	};
};
