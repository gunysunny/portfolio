import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',   // ★ 반드시 슬래시 앞뒤로 포함!
})