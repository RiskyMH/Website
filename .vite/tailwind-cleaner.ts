//
// Huge thanks to https://github.com/madmoizo/sveltekit-t4-repro/blob/main/.vite/tailwindcss-cleaner.ts
//

import type { Plugin } from "vite"

export default function tailwindcssCleaner(): Plugin {
    return {
        name: "tailwindcss-cleaner",

        generateBundle(options, bundle) {
            for (const [fileName, file] of Object.entries(bundle)) {
                if (file.type === "asset" && fileName.endsWith(".css") && typeof file.source === "string") {
                    const customProperties = file.source.match(/--([a-zA-Z0-9_-]+)(?=:)/g) ?? []

                    for (const customProperty of customProperties) {
                        // lightningcss overrides user defined `color-scheme`
                        // and inject 2 variables: `lightningcss-dark` and `lightningcss-light`
                        // We must preserve it to avoid side-effects
                        if (customProperty.includes("--lightningcss-")) {
                            continue
                        }

                        const used = file.source.match(
                            new RegExp(`var\\(${customProperty}[,)]`, "g")
                        )
                        if (!used) {
                            file.source = file.source.replace(
                                new RegExp(`${customProperty}:.*?;`, "g"), ""
                            )
                        }
                    }
                }
            }
        }
    }
}