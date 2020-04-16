// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

import fromCWD from 'from-cwd';
import path from 'path';
import glob from 'glob';

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

export default glob.sync(fromCWD('./src/layouts/*.ts')).map((layout) => {
	const file = path.basename(layout, '.ts');
	return {
		input: `src/layouts/${file}.ts`,
		output: [
			{
				file: `dist/${file}.js`,
				format: 'cjs',
				sourcemap: true
			},
			{
				file: `dist/${file}.es.js`,
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
	}
});
