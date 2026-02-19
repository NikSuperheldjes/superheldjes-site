import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  // We voegen hier alle 'gereedschappen' toe die je site nodig heeft
  integrations: [
    react(), 
    tailwind(), 
    markdoc(), 
    keystatic()
  ],
  
  // Belangrijk voor Azure Static Web Apps: we bouwen een statische site
  output: 'static',
});