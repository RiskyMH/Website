import type { BunPlugin } from "bun";
import type { SVGProps } from "react";
// import { optimize } from "svgo";

/**
 * Bun plugin that transforms imported SVG files into React components with JSX-friendly attributes.
 * The plugin:
 * - Reads SVG content at build time.
 * - Normalizes attributes to their camelCase JSX equivalents (e.g., `class` to `className`, `viewbox` to `viewBox`).
 * - Strips XML declarations and comments from the SVG source.
 * - Converts the SVG filename into a PascalCase component name.
 * - Generates a React functional component exporting the processed SVG, forwarding received SVG props.
 */
export const svgoPlugin: BunPlugin = {
    name: "svgo-plugin",
    setup(build) {
        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            const svgSource = await Bun.file(args.path).text();
            // const { data } = optimize(svgSource, { path: args.path });

            const toCamelAttr = (attr: string) => {
                if (attr.startsWith("data-") || attr.startsWith("aria-")) return attr;
                const map: Record<string, string> = {
                    class: "className",
                    for: "htmlFor",
                    "xlink:href": "xlinkHref",
                    "clip-rule": "clipRule",
                    "fill-rule": "fillRule",
                    "stroke-width": "strokeWidth",
                    "stroke-linecap": "strokeLinecap",
                    "stroke-linejoin": "strokeLinejoin",
                    "stroke-miterlimit": "strokeMiterlimit",
                    "stroke-dasharray": "strokeDasharray",
                    "stroke-dashoffset": "strokeDashoffset",
                    "stroke-opacity": "strokeOpacity",
                    "fill-opacity": "fillOpacity",
                    "stop-color": "stopColor",
                    "stop-opacity": "stopOpacity",
                    "shape-rendering": "shapeRendering",
                    viewbox: "viewBox",
                };
                return map[attr] ?? attr.replace(/[-:](.)/g, (_, ch) => ch.toUpperCase());
            };

            const toJsx = (svg: string) =>
                svg
                    .replace(/<\?xml.*?\?>/g, "")
                    .replace(/<!--[\s\S]*?-->/g, "")
                    .replace(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(=)/g, (_, p1, p2) => `${toCamelAttr(p1)}${p2}`)
                    .trim();

            const jsx = toJsx(svgSource);
            const fileName = args.path.split(/[\\/]/).pop() ?? "Icon";
            const componentName = fileName
                .replace(/\.svg$/i, "")
                .split(/[-_\s]+/)
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join("");

            return {
                contents: `
const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (
    ${jsx.replace(/<svg([^>]*)>/, "<svg$1 width={128} height={128} {...props}>")}
);

export default ${componentName};
                `,
                loader: "tsx",
            };
        });
    },
};

Bun.plugin(svgoPlugin);

