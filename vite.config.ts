import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    // 自動輸出 .d.ts 型別
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      insertTypesEntry: true, // 讓 dist/index.d.ts 自動指向 types
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TheOrangeAgenda',
      // 讓輸出檔名依格式不同
      fileName: format => (format === 'es' ? 'index.js' : 'index.umd.cjs'),
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 告訴 Rollup 不要打包這些依賴
      external: ['react', 'react-dom', /^@radix-ui\//],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) return 'style.css';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    cssCodeSplit: false, // 避免多份 CSS 拆檔
    sourcemap: true, // 方便 debug
    emptyOutDir: true, // 每次 build 清理 dist/
  },
});
