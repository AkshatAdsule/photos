// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: "https://photos.aksads.tech",

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Manrope",
      cssVariable: "--font-manrope"
    }
  ],

  devToolbar: {
    enabled: true,
  },

  integrations: [sitemap()],
  prefetch: { prefetchAll: false },

  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
