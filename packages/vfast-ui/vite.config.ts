import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [Vue(), VueJsx(), DefineOptions()],
  optimizeDeps: {
    disabled: true
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vfast-ui',
      formats: ['umd', 'es', 'cjs'],
      fileName: (format: string) => {
        const suffix = format === 'umd' ? '' : `.${format}`;
        return `${name}${suffix}.min.js`;
      }
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          exports: 'named',
          vue: 'Vue'
        }
      }
    }
  }
});
