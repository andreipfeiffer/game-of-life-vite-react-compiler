import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {
  compilationMode: "annotation",
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/game-of-life-vite-react-compiler/",
  plugins: [react({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler", ReactCompilerConfig],
      ],
    },
  })],
})
