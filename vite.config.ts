import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@vlutter/counter': path.resolve(__dirname, 'src/lib/counter'),
      '@vlutter/counter-react': path.resolve(__dirname, 'src/lib/counter-react'),
    }
  }
})
