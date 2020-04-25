import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'esm',
      file: pkg.module,
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
    'child_process',
  ],
}
