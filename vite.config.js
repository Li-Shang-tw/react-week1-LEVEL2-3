import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //開發 或 產品
  base:process.env.Node_ENV ==="production"?"/react-gh-page-sample/":"/",
  plugins: [react()],
})
