// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

import fromCWD from 'from-cwd';
import path from 'path';
import glob from 'glob';

// -----------------------------------------------------------------------------
// Files
// -----------------------------------------------------------------------------

const layouts = glob.sync(fromCWD('./src/layouts/*.ts'));
const files = [
	{
		input: 'src/index.ts',
		output: 'dist/index.js',
		outputES: 'dist/index.es.js'
	}
].concat(layouts.map((layout) => {
	const file = path.basename(layout, '.ts');
	return {
		input: `src/layouts/${file}.ts`,
		output: `dist/layouts/${file}.js`,
		outputES: `dist/layouts/${file}.es.js`
	}
}));

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

export default files.map((file) => ({
	input: file.input,
	output: [
		{
			file: file.output,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: file.outputES,
			format: 'es',
			sourcemap: true
		}
	],
	plugins: [
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			exclude: '**!/__tests__/!**',
			clean: true
		})
	]
}));
