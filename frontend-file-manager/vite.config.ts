import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [visualizer() as PluginOption, react(), svgr()],
  base: './',
  build: {
    manifest: true,
    target: 'esnext',
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2/.test(extType)) {
            extType = 'css';
          }
          return `static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
      },
    },
  },
  resolve: {
    alias: [
      { find: 'pages', replacement: '/src/pages' },
      { find: 'app', replacement: '/src/app' },
      { find: 'entities', replacement: '/src/entities' },
      { find: 'features', replacement: '/src/features' },
      { find: 'processes', replacement: '/src/processes' },
      { find: 'shared', replacement: '/src/shared' },
      { find: 'widgets', replacement: '/src/widgets' },
    ],
  },
});