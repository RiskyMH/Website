#!/usr/bin/env bun

const WIDTH = 50;
const WEBSITE_URL = "https://riskymh.dev";
const GITUHB_URL = "https://github.com/RiskyMH";
const DISCORD_URL = "https://discord.gg/EpRzgepKuF";
const EMAIL_MAILTO = atob("bWFpbHRvOm1pY2hhZWxAcmlza3ltaC5kZXY");

const gray = (str: string) => `\x1b[38;2;107;114;128m${str}\x1b[0m`;
const lightGray = (str: string) => `\x1b[38;2;156;163;175m${str}\x1b[0m`;
const blue = (str: string) => `\x1b[38;2;59;130;246m${str}\x1b[0m`;
const bold = (str: string) => `\x1b[1m${str}\x1b[0m`;

const link = (text: string, url: string) =>
  blue(`\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\`);

function center(text: string) {
  const strippedLength = Bun.stringWidth(Bun.stripANSI(text));
  const padding = Math.floor((WIDTH - 2 - strippedLength) / 2);
  const rightPadding = WIDTH - 2 - strippedLength - padding;

  return (
    gray("│") +
    " ".repeat(padding) +
    text +
    " ".repeat(rightPadding) +
    gray("│")
  );
}

const content = `${gray("╭" + "─".repeat(WIDTH - 2) + "╮")}
${gray("│" + " ".repeat(WIDTH - 2) + "│")}
${center(bold("🔥 RiskyMH") + "  ")}
${gray("│" + " ".repeat(WIDTH - 2) + "│")}
${center(lightGray("Just a random person on the internet"))}
${center(
  link("website", WEBSITE_URL) +
    lightGray(" | ") +
    link("github", GITUHB_URL) +
    lightGray(" | ") +
    link("discord", DISCORD_URL) +
    lightGray(" | ") +
    link("email", EMAIL_MAILTO)
)}
${gray("│" + " ".repeat(WIDTH - 2) + "│")}
${gray("╰" + "─".repeat(WIDTH - 2) + "╯")}`;

if (import.meta.main) {
  await Bun.write(
    import.meta.dir + "/cli.ts",
    `#!/usr/bin/env node
import { generate } from "./generate" with { type: "macro" };
console.log(generate());`
  );

  await Bun.build({
    entrypoints: [import.meta.dir + "/cli.ts"],
    outdir: import.meta.dir,
    target: "bun",
    minify: true,
  });

  await Bun.file(import.meta.dir + "/cli.ts").delete();
  await Bun.file(import.meta.dir + "/../public/cli.txt").write(content + "\n");

  console.log(content);
}

export const generate = () => content;
