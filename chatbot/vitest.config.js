import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'
const path = require('path')
export default mergeConfig(
  viteConfig,

  defineConfig({
    test: {
      root: path.resolve(__dirname, 'src'),
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)) 
    }
  })
)

