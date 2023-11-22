import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/react-space-tourism/',
  plugins: [react()],
  build:{
    outDir:'dist'
  },
  publicDir:'static'
})
