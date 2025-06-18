import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";
import tailwindcss from '@tailwindcss/vite';
import min from 'astro-min';


// https://astro.build/config
export default defineConfig({
  integrations: [
    min({
      do_not_minify_doctype: true,
      ensure_spec_compliant_unquoted_attribute_values: true,
      keep_closing_tags: true,
      keep_comments: false,
      keep_html_and_head_opening_tags: true,
      keep_input_type_text_attr: true,
      keep_spaces_between_attributes: true,
      keep_ssi_comments: false,
      minify_css: false, // already done
      minify_js: false, // seems unnecessary
      preserve_brace_template_syntax: true,
      preserve_chevron_percent_template_syntax: true,
      remove_bangs: false,
      remove_processing_instructions: false,
    }),
    // tailwind(),
  ],
  experimental: {
    // contentCollectionCache: true,
    // svg: true,
  },
  compressHTML: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      assetsInlineLimit: 100000,
    }
  },
});
