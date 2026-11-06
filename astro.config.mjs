import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://missavaivpn.blog',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
