import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //開發 或 產品
  base:process.env.Node_ENV ==="production"?"/react-week1-LEVEL2-3/":"/",
  plugins: [react()],
})
