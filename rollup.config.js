import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
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
    external: ['jest-snapshot', 'child_process'],
  },
  {
    input: './dist/index.d.ts',
    plugins: [
      del({
        targets: ['dist/**/*.d.ts', '!dist/index.d.ts'],
        hook: 'buildEnd',
      }),
      dts(),
    ],
    output: [
      {
        format: 'esm',
        file: './dist/index.d.ts',
      },
    ],
  },
];

export default options;
