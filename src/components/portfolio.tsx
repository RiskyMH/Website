import { revealObfuscatedScript } from "./portfolio-shared";
import {
  SiteHeader,
  HeroSection,
  FeaturedProject,
  DiscordProjects,
  Applications,
  Experiments,
  DeveloperTools,
  SiteFooter,
} from "./portfolio-sections";

export default function Portfolio() {
  return (
    <div id="top" className="site-shell">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-raised focus:px-4 focus:py-2 focus:text-sm focus:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Skip to projects
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <div id="work" className="pt-10 pb-[55px] max-[600px]:pb-[42px] max-[600px]:pt-[31px]">
          <FeaturedProject />
          <DiscordProjects />
          <Applications />
          <Experiments />
          <DeveloperTools />
        </div>
      </main>
      <SiteFooter />
      <script dangerouslySetInnerHTML={{ __html: revealObfuscatedScript }} />
    </div>
  );
}
