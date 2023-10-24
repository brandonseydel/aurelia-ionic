import { defineConfig } from 'vite';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import * as packageJson from './package.json';

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'aurelia-ionic',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies).concat(Object.keys(packageJson.dependencies)),
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: true,          
          declaration: true,
          outDir: 'dist',
          exclude: ['**/__tests__'],
          tsconfig: './tsconfig.build.json',
        }),
      ],
    },
  },
});
