import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://Abdelaziz00235.github.io',
  base:'MonCV',
  trailingSlash:'always',
  integrations: [tailwind()],
});
