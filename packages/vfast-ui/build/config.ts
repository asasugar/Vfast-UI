import { resolve } from 'path';
import { UserConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { comsInput } from './get-file';

// const name = 'vfast-ui';
// 筛选出所有的组件

const Config: UserConfig = {
  plugins: [Vue(), VueJsx(), DefineOptions()],
  optimizeDeps: {
    disabled: true
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    // outDir: undefined,
    brotliSize: false,
    emptyOutDir: true,
    cssTarget: ['chrome53'],
    cssCodeSplit: true,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      input: [resolve(__dirname, '../src/index'), ...comsInput()],
      output: {
        entryFileNames: chunkInfo => {
          return `${chunkInfo.exports[0]}.js`;
        },
        format: 'es',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          exports: 'named',
          vue: 'Vue'
        }
        // file: 'es/index.mjs' // 通用模块 => 同时兼容 CJS 和 AMD，并且支持直接在前端用 <script src="lib.umd.js"></script>
      }
    }
  }
};
export function getConfig({ command, mode }: { command: string; mode: string }) {
  console.log(`vite command: ${command}, vite mode: ${mode}`);
  return Config;
}
