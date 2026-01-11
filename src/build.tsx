import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToReadableStream } from 'react-dom/server';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';

const pages: { component: React.ReactElement; filename: string }[] = [
    { component: <HomePage />, filename: 'index.html' },
    { component: <NotFoundPage />, filename: '404.html' },
];

const outputDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

const cssOutputPath = path.resolve(__dirname, '../dist/out.css');
if (!process.argv.includes('--no-tailwind') || !fs.existsSync(cssOutputPath)) {
    console.log('Building Tailwind CSS...');
    await Bun.$`bun tailwindcss -i tailwind.css -o ${cssOutputPath} --minify`.cwd(__dirname).quiet();
}
const css = await Bun.file(cssOutputPath).text();

console.log('Building pages...');
pages.forEach(async ({ component, filename }) => {
    const html = await new Response(await renderToReadableStream(component)).text();
    const fullHtml = html.replace(
        '<style id="tailwind-styles">/*tailwind*/</style>',
        `<style id="tailwind-styles">${css}</style>`
    ).replace("_onclick=", "onclick=")
    .replaceAll("<!-- -->", "");
    fs.writeFileSync(path.join(outputDir, filename), fullHtml, 'utf8');
    console.log(`Built ${filename}`);
});

for (const file of new Bun.Glob("**/*").scanSync(path.resolve(__dirname, "../public"))) {
    const existingFile = Bun.file(path.join(__dirname, "../public", file));
    const newFile = Bun.file(path.join(outputDir, file))
    newFile.write(existingFile);
}


