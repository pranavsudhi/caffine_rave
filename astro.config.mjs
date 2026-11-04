import { defineConfig } from "astro/config";

export default defineConfig({
  // Keep spaces between inline elements exactly as written (Astro 7's default 'jsx' mode drops them)
  compressHTML: true,
});
