import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시 base 를 저장소 이름으로 바꿔주세요.
// 예) 저장소가 https://github.com/hana0627/resume 이면 base: '/resume/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
