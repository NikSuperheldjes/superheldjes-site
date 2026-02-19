import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // De adapter
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'hybrid', // Cruciaal voor Azure
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [keystatic()],
});