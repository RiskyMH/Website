import React from "react";
import "../tailwind.css";

// You can use next/head or react-helmet if SSR/SPA, but since this is static, just output direct head
export type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};
const siteTitle = "RiskyMH";

const Layout: React.FC<LayoutProps> = ({ title = siteTitle, children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/fire_flat.svg" />
      <meta name="generator" content="RiskyMH React layout" />
      <title>{title}</title>
      <meta name="description" content="Just a random person on the internet" />
      <meta name="keywords" content="RiskyMH,EmailThing" />
      <meta name="author" content="RiskyMH" />
      {/* Discord coloring etc */}
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2a2a2a" />
      <meta name="theme-color" content="#FF6723" />
      <meta name="color-scheme" content="dark" />
      {/* Fancier SEO */}
      <meta property="og:title" content="RiskyMH" />
      <meta property="og:description" content="Just a random person on the internet" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://riskymh.dev/" />
      <meta property="og:image" content="https://riskymh.dev/fire_anim.png" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="RiskyMH5" />
      <meta property="twitter:title" content="RiskyMH" />
      <meta property="twitter:description" content="Just a random person on the internet" />
      <meta property="twitter:image" content="https://riskymh.dev/fire_anim.png" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "RiskyMH",
          author: { "@type": "Person", name: "RiskyMH" },
          description: "Just a random person on the internet.",
          logo: "https://riskymh.dev/fire_anim.png",
          url: "https://riskymh.dev/"
        })
      }} />
      {/* MUST NOT REMOVE */}
      <style id="tailwind-styles">/*tailwind*/</style>
    </head>
    <body className="font-sans">
      {children}
      {process.env.EXTRA_SCRIPTS && <div dangerouslySetInnerHTML={{ __html: process.env.EXTRA_SCRIPTS }} />}
    </body>
  </html>
);

export default Layout;
