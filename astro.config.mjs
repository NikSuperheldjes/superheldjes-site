import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 1. BELANGRIJK: Zet output op 'hybrid' of 'server'
  output: 'hybrid', 
  
  integrations: [
    react(), 
    markdoc(), 
    keystatic() // 2. Zorg dat deze in de lijst staat
  ],
  
  vite: {
    plugins: [tailwindcss()],
  },
});