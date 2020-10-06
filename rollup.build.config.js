
// rollup.config.js - https://github.com/rollup/plugins

// import injectProcessEnv from 'rollup-plugin-inject-process-env';
// import json from '@rollup/plugin-json';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import { string } from "rollup-plugin-string";
import { terser } from 'rollup-plugin-terser';

const {argv} = require('yargs')

// const ENV = 'production'

const outputDir = 'build'


export default [

	// Our App
	{

		input: 'nurbs.js',

		output: [
			{
				sourcemap: false,
				file: `${outputDir}/nurbs.js`,
				plugins: [terser()]
			},
		],
	}
]