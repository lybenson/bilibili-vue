import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function createPlugins () {
  return [
    vue()
  ]
}

export default defineConfig({
  root: __dirname,
  mode: 'development',
  plugins: createPlugins(),
  publicDir: './public',
  cacheDir: './.vite',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'components', replacement: '/src/components' },
      { find: 'api', replacement: '/src/api' },
      { find: 'assets', replacement: '/src/assets' }
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
  },
  css: {
    modules: []
  },
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8080,
    fs: {
      strict: false
    }
  }
})
