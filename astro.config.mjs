import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://syracusehydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
