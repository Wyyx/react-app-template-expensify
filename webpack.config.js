const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
	console.log('env', env)
	const isProduction = env === 'production'
	const CSSExtract = new ExtractTextPlugin('styles.css')

	return {
		entry: [ 'babel-polyfill', './src/app.js' ],
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [ 'babel-loader' ],
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				}
			]
		},
		devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			publicPath: '/dist/',
			historyApiFallback: true
		},
		plugins: [ CSSExtract ]
	}
}
