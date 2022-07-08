const paths = require('./paths');
const path = require('path');

/*-------------------*/


module.exports = {

	prod: {
		filename: `assets/js/[name].[contenthash].js`,
		path: paths.dist,
		assetModuleFilename: pathData => {
			const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
			return `${filepath}/[name][ext]`;
		},
		asyncChunks: true,
		clean: true,
	}

};
