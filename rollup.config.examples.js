// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

export default {
	input: 'src/examples.ts',
	output: {
		file: 'examples/index.js',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			exclude: '**!/__tests__/!**',
			clean: true
		})
	]
}
