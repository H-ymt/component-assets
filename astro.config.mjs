import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), mdx()]
});