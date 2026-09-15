import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { defineConfig } from 'vite';
import Home from './app/page';

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/bublitz-contabilidade/',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [
    react(),
    {
      name: 'prerender-homepage',
      transformIndexHtml(html) {
        const content = renderToString(createElement(Home));
        return html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
      },
    },
  ],
  build: { outDir: 'dist-pages', emptyOutDir: true },
});
