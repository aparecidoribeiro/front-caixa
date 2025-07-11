import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@features": path.resolve(__dirname, "src/features"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@loaders": path.resolve(__dirname, "src/loaders"),
    }
  }
})
