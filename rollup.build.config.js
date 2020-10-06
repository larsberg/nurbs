
// rollup.config.js - https://github.com/rollup/plugins
import { terser } from 'rollup-plugin-terser';
const outputDir = 'build'

export default [
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