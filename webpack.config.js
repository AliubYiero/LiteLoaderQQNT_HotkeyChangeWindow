const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/renderer.js',
	target: 'node',
	output: {
		filename: 'renderer.js',
		path: path.resolve(__dirname, 'dist'),
		// libraryTarget: 'commonjs'
	},
	resolve: {
		extensions: [ '.js']
	},
	module: {
	},
};
