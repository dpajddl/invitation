  import react from '@vitejs/plugin-react';
  import { defineConfig } from 'vite';
  import svgr from 'vite-plugin-svgr';
  import tsconfigPaths from 'vite-tsconfig-paths';
  import viteImagemin from "vite-plugin-imagemin";

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgr(),
      viteImagemin({
        webp: {
          quality: 60
        },
        mozjpeg: {
          quality: 60
        }
      })],
    base: '/invitation/',
  });
