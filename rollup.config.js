import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: './dist/index.js',
    },
    {
      format: 'esm',
      file: './dist/index.mjs',
    },
  ],
  plugins: [
    builtins(),
    resolve({
      preferBuiltins: true,
    }),
    typescript(),
  ],
  external: [
    'jest-snapshot',
  ],
}
