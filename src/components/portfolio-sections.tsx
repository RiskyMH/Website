import {
  Brand,
  ProjectIcon,
  WavePath,
  reducedMotionScript,
} from "./portfolio-shared";
import {
  HeartIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  Swords,
  FireIcon,
  HoneypotIcon,
  ReportIcon,
  DiscordIcon,
  RiskybotIcon,
  FlameIcon,
  EmailthingIcon,
  FormsIcon,
  ChatroomIcon,
  StatsCompareIcon,
  StickyRolesIcon,
  MemberScreeningIcon,
  SecurityActionsIcon,
  ToolsIcon,
  GithubIcon,
  MailIcon,
  GlobeIcon,
  ExternalIcon,
  NpmIcon,
  TwitterIcon,
  YoutubeIcon,
  RedditIcon,
  BlueskyIcon,
  WikipediaIcon,
} from "./icons";

const waveBright = "M0 130 C115 130 195 221 300 221 C405 221 450 184 548 154 C650 123 708 73 808 73 C920 73 1010 160 1098 164 C1143 167 1168 130 1200 130";
const waveBrightUp = "M0 130 C119.5 137.7 202.7 229.9 308.3 224.9 C408.2 216.7 449.6 177 539.2 145.2 C635.4 119.1 692.7 73.6 796 80.4 C915.6 81.3 1010.7 163.2 1100.3 160.2 C1144.8 160.3 1169.1 122.2 1200 121.2";
const waveBrightDown = "M0 130 C110.5 122.3 187.3 212.1 291.7 217.1 C401.8 225.3 450.4 191 556.8 162.8 C664.6 126.9 723.3 72.4 820 65.6 C924.4 64.7 1009.3 156.8 1095.7 167.8 C1141.2 173.7 1166.9 137.8 1200 138.8";

const waveMid = "M0 142 C130 142 196 198 310 204 C435 211 512 168 600 141 C705 108 764 96 852 116 C950 138 1012 202 1106 188 C1153 181 1177 142 1200 142";
const waveMidUp = "M0 151.8 C132.7 152 196.9 204.9 303.6 202.7 C419.1 201.8 492.7 157 580.8 131.8 C691.5 105.2 755.4 97.6 851 123.6 C954.8 148.9 1018.1 212.5 1110.5 194.2 C1155.4 184 1178.2 143.2 1200 141.4";
const waveMidDown = "M0 132.2 C127.3 132 195.1 191.1 316.4 205.3 C450.9 220.2 531.3 179 619.2 150.2 C718.5 110.8 772.6 94.4 853 108.4 C945.2 127.1 1005.9 191.5 1101.5 181.8 C1150.6 178 1175.8 140.8 1200 142.6";

const waveSoft = "M0 115 C105 115 183 78 275 82 C383 87 455 169 552 179 C654 190 723 145 808 103 C900 58 974 76 1045 119 C1116 161 1165 115 1200 115";
const waveSoftUp = "M0 119.7 C101.5 112.5 177.7 71.5 271.2 76.1 C385.7 87.9 463 174.4 564.6 185.6 C665.5 191.2 730.4 141.4 808.9 96.1 C895.4 53.3 967.8 76.2 1039.9 123.9 C1113.4 168 1164.1 121.3 1200 119.7";
const waveSoftDown = "M0 110.3 C108.5 117.5 188.3 84.5 278.8 87.9 C380.3 86.1 447 163.6 539.4 172.4 C642.5 188.8 715.6 148.6 807.1 109.9 C904.6 62.7 980.2 75.8 1050.1 114.1 C1118.6 154 1165.9 108.7 1200 110.3";
import {
  ProjectLink,
  ProjectLinks,
  HeaderSocialLink,
  ProfileSocialLink,
  FooterSocialLink,
  NavLinks,
  desktopNavClass,
  mobileNavClass,
  SectionHeading,
  ItemCard,
  ExperimentRow,
  ToolRow,
  SocialGroup,
  WorkSection,
  CardGrid,
  ExperimentList,
  ToolList,
} from "./portfolio-primitives";

export function SiteHeader() {
  return (
    <header className="site-header flex h-16 items-center justify-between max-[600px]:h-[60px]">
      <a className="wordmark inline-flex items-center gap-[9px] whitespace-nowrap text-sm font-[680] tracking-[-.025em]" href="#top" aria-label="RiskyMH home">
        <FireIcon className="size-[23px] object-contain" aria-hidden="true" />
        <span>RiskyMH</span>
      </a>
      <nav className="desktop-nav absolute left-1/2 flex -translate-x-1/2 items-center gap-[30px] max-[600px]:hidden" aria-label="Main navigation">
        <NavLinks className={desktopNavClass} />
      </nav>
      <nav className="header-socials flex items-center gap-[7px] max-[600px]:hidden" aria-label="Quick contact links">
        <HeaderSocialLink href="https://github.com/RiskyMH" icon={<Brand icon={GithubIcon} />}>GitHub</HeaderSocialLink>
        <HeaderSocialLink href="https://discord.com/invite/EpRzgepKuF" icon={<Brand icon={DiscordIcon} />}>Discord</HeaderSocialLink>
        <HeaderSocialLink href="mailto:hello@riskymh.dev" icon={<Brand icon={MailIcon} />}>Email</HeaderSocialLink>
        <a className="relative grid size-8 place-items-center rounded-full text-accent transition-colors hover:bg-accent-subtle hover:text-accent-hover" href="https://github.com/sponsors/RiskyMH" target="_blank" rel="noreferrer" aria-label="Sponsor RiskyMH on GitHub">
          <HeartIcon className="size-[15px]" />
        </a>
      </nav>
      <a className="mobile-sponsor-heart relative ml-auto hidden size-[29px] place-items-center rounded-full text-accent transition-colors hover:bg-accent-subtle max-[600px]:grid" href="https://github.com/sponsors/RiskyMH" target="_blank" rel="noreferrer" aria-label="Sponsor RiskyMH on GitHub">
        <HeartIcon className="size-[15px]" />
      </a>
      <details className="mobile-nav group relative hidden max-[600px]:block">
        <summary className="grid size-9 cursor-pointer list-none place-items-center rounded-[7px] [&::-webkit-details-marker]:hidden" aria-label="Toggle navigation">
          <span className="menu-glyph group-open:!bg-transparent group-open:before:![transform:rotate(45deg)] group-open:after:![transform:rotate(-45deg)]" />
        </summary>
        <nav className="mobile-menu pointer-events-none absolute right-0 top-11 flex w-[168px] [transform:translateY(-6px)] flex-col rounded-[10px] border border-line bg-raised p-[6px] opacity-0 shadow-[0_14px_34px_rgba(0,0,0,.3)] transition-[opacity,transform] duration-200 ease-out group-open:pointer-events-auto group-open:[transform:translateY(0)] group-open:opacity-100" aria-label="Mobile navigation">
          <NavLinks className={mobileNavClass} />
          <div className="mt-1 flex items-center justify-center gap-2 border-t border-line pt-2">
            <HeaderSocialLink href="https://github.com/RiskyMH" icon={<Brand icon={GithubIcon} />}>GitHub</HeaderSocialLink>
            <HeaderSocialLink href="https://discord.com/invite/EpRzgepKuF" icon={<Brand icon={DiscordIcon} />}>Discord</HeaderSocialLink>
            <HeaderSocialLink href="mailto:hello@riskymh.dev" icon={<Brand icon={MailIcon} />}>Email</HeaderSocialLink>
          </div>
        </nav>
      </details>
      <span className="scroll-progress absolute bottom-0 left-0 right-0 mx-auto h-px w-[min(calc(100%_-_2*var(--page-padding)),var(--page-width))] origin-left bg-accent [scale:0_1]" aria-hidden="true" />
    </header>
  );
}

export function ProfileCard() {
  return (
    <aside
      className="profile-card relative isolate flex w-[230px] min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-[14px] border border-white/10 bg-[radial-gradient(ellipse_at_50%_15%,rgba(255,103,35,.1),transparent_52%),linear-gradient(145deg,#242424,#1d1d1d)] px-[15px] pb-[14px] pt-[18px] text-center shadow-[0_16px_42px_rgba(0,0,0,.2)] max-[900px]:w-[210px] max-[600px]:grid max-[600px]:min-h-[84px] max-[600px]:w-full max-[600px]:grid-cols-[48px_minmax(0,1fr)_auto] max-[600px]:grid-rows-2 max-[600px]:items-center max-[600px]:justify-items-start max-[600px]:gap-x-[11px] max-[600px]:gap-y-0.5 max-[600px]:p-[10px] max-[600px]:px-3 max-[600px]:text-left"
      aria-label="RiskyMH profile"
    >
      <picture className="profile-avatar relative block size-[84px] max-[600px]:col-start-1 max-[600px]:row-span-2 max-[600px]:size-12">
        <source srcSet="/fire_anim.avif" type="image/avif" />
        <source srcSet="/fire_anim_small.webp" type="image/webp" media="(max-width:600px)" />
        <source srcSet="/fire_anim.webp" type="image/webp" media="(min-width:600px)" />
        <source srcSet="/fire_anim.png" type="image/png" />
        <img className="profile-flame size-[84px] object-contain max-[600px]:size-full text-transparent rounded-lg" src="/fire_flat.svg" alt="RiskyMH flame logo" width="84" height="84" fetchPriority="high" />
      </picture>
      <p className="profile-name m-[7px_0_3px] text-[17px] font-[670] max-[600px]:col-start-2 max-[600px]:row-start-1 max-[600px]:m-0 max-[600px]:mb-[2px] max-[600px]:text-[16px]">RiskyMH</p>
      <p className="profile-caption m-0 text-[13px] leading-[1.55] text-secondary max-[600px]:col-start-2 max-[600px]:row-start-2 max-[600px]:text-[12px]">Just a random person<br />on the internet.</p>
      <div className="profile-links mt-[13px] flex gap-2 max-[600px]:col-start-3 max-[600px]:row-span-2 max-[600px]:m-0 max-[600px]:gap-[5px]">
        <ProfileSocialLink href="https://github.com/RiskyMH" icon={<Brand icon={GithubIcon} />}>GitHub</ProfileSocialLink>
        <ProfileSocialLink href="https://discord.com/invite/EpRzgepKuF" icon={<Brand icon={DiscordIcon} />}>Discord</ProfileSocialLink>
        <ProfileSocialLink href="mailto:hello@riskymh.dev" icon={<Brand icon={MailIcon} />}>Email</ProfileSocialLink>
      </div>
    </aside>
  );
}

export function HeroSection() {
  return (
    <section className="hero relative isolate flex min-h-[clamp(400px,60svh,560px)] w-screen [margin-left:calc(50%_-_50vw)] items-stretch max-[600px]:min-h-[clamp(400px,60svh,540px)]" id="about" aria-labelledby="hero-title">
      <div className="hero-glow pointer-events-none absolute bottom-[-190px] left-0 -z-10 h-[95%] w-screen bg-[radial-gradient(ellipse_at_28%_68%,rgba(255,103,35,.075),rgba(255,103,35,.025)_45%,transparent_76%),radial-gradient(ellipse_at_88%_42%,rgba(255,103,35,.035),transparent_58%)]" aria-hidden="true" />
      <div className="relative z-[1] mx-auto grid min-h-[inherit] w-[min(calc(100%_-_2*var(--page-padding)),var(--page-width))] grid-cols-[minmax(0,1fr)_230px] content-center items-center gap-14 px-[7.5%] pb-[74px] pt-[38px] max-[900px]:grid-cols-[minmax(0,1fr)_210px] max-[900px]:gap-8 max-[900px]:px-[5%] max-[600px]:grid-cols-1 max-[600px]:gap-6 max-[600px]:px-0 max-[600px]:pb-[68px] max-[600px]:pt-9">
        <div className="hero-copy min-w-0 pb-[5px] before:mb-[15px] before:block before:h-[3px] before:w-[25px] before:rounded-[2px] before:bg-accent before:content-[''] max-[600px]:before:mb-[13px]">
          <h1 className="m-0 text-[clamp(2.6rem,5vw,3.65rem)] font-[730] leading-[1.06] tracking-[-.055em] max-[900px]:text-[clamp(2.5rem,5.6vw,3.4rem)] max-[600px]:text-[clamp(2.25rem,9vw,2.75rem)]">I build things<br />for the <span className="text-accent">internet.</span></h1>
          <p className="m-[18px_0_0] text-[16px] leading-[1.65] text-secondary max-[600px]:mt-3 max-[600px]:text-[14px]">Software, open source and experiments.</p>
        </div>
        <ProfileCard />
      </div>
      <svg className="hero-lines pointer-events-none absolute bottom-[30px] left-0 h-[31%] max-h-[290px] min-h-[175px] w-screen overflow-hidden opacity-[.98] max-[600px]:bottom-6 max-[600px]:h-[26%] max-[600px]:min-h-[145px]" viewBox="0 0 1200 260" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <g className="wave-thread wave-thread-one"><WavePath className="hero-line stroke-[1.35px] [stroke-opacity:.86]" d={waveBright} lifted={waveBrightUp} dropped={waveBrightDown} duration="5.5s" /></g>
        <g className="wave-thread wave-thread-two"><WavePath className="hero-line stroke-[1.1px] [stroke-opacity:.42]" d={waveMid} lifted={waveMidUp} dropped={waveMidDown} duration="6.5s" /></g>
        <g className="wave-thread wave-thread-three"><WavePath className="hero-line stroke-[1px] [stroke-opacity:.22]" d={waveSoft} lifted={waveSoftUp} dropped={waveSoftDown} duration="8s" /></g>
      </svg>
      <script dangerouslySetInnerHTML={{ __html: reducedMotionScript }} />
      <a className="scroll-cue group absolute bottom-[13px] left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2 text-[12px] text-muted transition-colors hover:text-primary max-[600px]:bottom-[11px]" href="#work">
        <span>Explore my work</span>
        <ArrowDownIcon className="size-3.5 shrink-0 text-accent transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
      </a>
    </section>
  );
}

export function FeaturedProject() {
  return (
    <WorkSection labelledBy="featured-title" className="featured-section">
      <SectionHeading id="featured-title">Featured</SectionHeading>
      <article className="featured-card group relative isolate grid min-h-[164px] grid-cols-[176px_minmax(0,1fr)] items-center overflow-hidden rounded-xl border border-line bg-raised before:absolute before:-z-10 before:bottom-0 before:right-[-10%] before:h-full before:w-[48%] before:bg-[radial-gradient(ellipse_at_85%_55%,rgba(255,103,35,.14),transparent_68%)] before:opacity-[.62] after:pointer-events-none after:absolute after:z-0 after:bottom-[-47px] after:left-[42%] after:h-[78px] after:w-[55%] after:rotate-[-5deg] after:rounded-[50%] after:border-b after:border-[rgba(255,103,35,.2)] after:content-[''] max-[600px]:min-h-[142px] max-[600px]:grid-cols-[72px_minmax(0,1fr)]">
        <a className="featured-art relative z-[1] grid min-h-[164px] place-items-center max-[600px]:min-h-[142px]" href="https://honeypot.riskymh.dev" target="_blank" rel="noreferrer" aria-label="Visit Honeypot website">
          <HoneypotIcon className="size-[104px] justify-self-center object-contain [transform:translateY(-4px)] transition-transform duration-[220ms] group-hover:-translate-y-px max-[600px]:size-[60px]" aria-hidden="true" />
        </a>
        <div className="featured-copy relative z-[1] min-w-0 py-[18px] pl-2 pr-7 max-[600px]:py-[13px] max-[600px]:pl-0 max-[600px]:pr-[11px]">
          <p className="project-label mb-[6px] mt-0 font-mono text-[11px] uppercase leading-[1.4] tracking-[.1em] text-muted max-[600px]:mb-1">OPEN SOURCE · DISCORD</p>
          <h3 className="mb-[7px] mt-0 text-[26px] font-bold tracking-[-.04em] max-[600px]:mb-1 max-[600px]:text-[18px]">Honeypot</h3>
          <p className="m-0 max-w-[610px] text-[15px] leading-[1.58] text-secondary max-[600px]:text-[13px] max-[600px]:leading-[1.5]">A Discord bot that catches and removes spam bots by monitoring a dedicated #honeypot channel.</p>
          <ProjectLinks className="featured-links mt-[13px] max-[600px]:mt-2">
            <ProjectLink href="https://honeypot.riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/honeypot" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/api/oauth2/authorize?client_id=1450060292716494940" icon={<Brand icon={DiscordIcon} />}>Invite Bot</ProjectLink>
            <ProjectLink href="https://honeypot.riskymh.dev/docs/setup-guide" icon={<Brand icon={ExternalIcon} className="p-0.5" />} className="max-[600px]:hidden">Docs</ProjectLink>
          </ProjectLinks>
        </div>
      </article>
    </WorkSection>
  );
}

export function DiscordProjects() {
  return (
    <WorkSection labelledBy="discord-projects-title" className="projects-section">
      <SectionHeading id="discord-projects-title">Discord projects</SectionHeading>
      <CardGrid kind="project">
        <ItemCard name="/report" description="Send message, user, or custom-issue reports to moderators." icon={<ProjectIcon icon={ReportIcon} />} href="https://discord.com/discovery/applications/1540722224288366682" className="project-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://github.com/RiskyMH/report-bot" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/api/oauth2/authorize?client_id=1540722224288366682" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Sticky Roles" description="Restores member roles and nicknames when they rejoin." icon={<ProjectIcon icon={StickyRolesIcon} />} href="https://discord.com/discovery/applications/1557739341017522176" className="project-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://github.com/RiskyMH/sticky-roles" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/discovery/applications/1557739341017522176" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="RiskyBOT" description="A Discord bot with a collection of fun features." icon={<ProjectIcon icon={RiskybotIcon} />} href="https://discord.com/discovery/applications/780657028695326720" className="project-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://github.com/RiskyMH/RiskyBOT" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://bot.riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://discord.com/oauth2/authorize?client_id=780657028695326720" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="The Fire Bot" description="A multi-purpose bot for the RiskyMH server." icon={<ProjectIcon icon={FlameIcon} className="p-2 text-accent" />} href="https://github.com/RiskyMH/the-fire-bot" className="project-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://github.com/RiskyMH/the-fire-bot" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/oauth2/authorize?client_id=1478485035752362096" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Member Screening" description="Screens new members and quarantines suspicious accounts until they verify." icon={<ProjectIcon icon={MemberScreeningIcon} />} href="https://github.com/RiskyMH/member-screening" className="project-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://github.com/RiskyMH/member-screening" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/oauth2/authorize?client_id=1569606502577348699" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Security Actions" description="Keeps Discord security actions enabled so DMs or invites can stay paused." icon={<ProjectIcon icon={SecurityActionsIcon} />} href="https://github.com/RiskyMH/security-actions" className="project-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://github.com/RiskyMH/security-actions" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/oauth2/authorize?client_id=1572642535028039740" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ItemCard>
      </CardGrid>
    </WorkSection>
  );
}

export function Applications() {
  return (
    <WorkSection labelledBy="applications-title" className="apps-section">
      <SectionHeading id="applications-title">Applications</SectionHeading>
      <CardGrid kind="application">
        <ItemCard name="EmailThing" description="A web app for receiving and sending email with custom domains." icon={<ProjectIcon icon={EmailthingIcon} />} href="https://emailthing.app/home" className="application-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://emailthing.app/home" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/EmailThing" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Forms" description="Create forms and collect responses." icon={<ProjectIcon icon={FormsIcon} />} href="https://forms.riskymh.dev" className="application-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://forms.riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/Forms" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Chatroom" description="A basic, stateless WebSocket chat with anonymous access." icon={<ProjectIcon icon={ChatroomIcon} />} href="https://chatroom.riskymh.dev" className="application-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://chatroom.riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/Chatroom" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Stats Compare" description="A set of higher-or-lower games built around statistics." icon={<ProjectIcon icon={StatsCompareIcon} />} href="https://stats.riskymh.dev" className="application-card">
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://stats.riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/Stats" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Hunger Games" description="A simulation of a chaotic fighting game." icon={<span className="grid size-[38px] shrink-0 place-items-center rounded-lg bg-white/[.045] text-accent" aria-hidden="true"><Swords className="size-[23px]" /></span>} href="https://riskymh.github.io/Hunger-Games/" className="application-card" archived>
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://riskymh.github.io/Hunger-Games/" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/Hunger-Games" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ItemCard>
        <ItemCard name="Tools" description="A collection of utilities and small web tools." icon={<ProjectIcon icon={ToolsIcon} />} href="https://tools.riskymh.dev" className="application-card" archived>
          <ProjectLinks className="pl-[49px]">
            <ProjectLink href="https://tools.riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/Tools" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ItemCard>
      </CardGrid>
    </WorkSection>
  );
}

export function Experiments() {
  return (
    <WorkSection labelledBy="experiments-title" className="experiments-section">
      <SectionHeading id="experiments-title">Other experiments</SectionHeading>
      <ExperimentList>
        <ExperimentRow name="honeypot-lite" description="A lighter Rust version of Honeypot.">
          <ProjectLinks>
            <ProjectLink href="https://github.com/RiskyMH/honeypot-lite" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://discord.com/api/oauth2/authorize?client_id=1491864770490532061" icon={<Brand icon={DiscordIcon} />}>Invite</ProjectLink>
          </ProjectLinks>
        </ExperimentRow>
        <ExperimentRow name="honeypot-site">
          <ProjectLinks><ProjectLink href="https://github.com/RiskyMH/honeypot-site" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink></ProjectLinks>
        </ExperimentRow>
        <ExperimentRow name="website" description="Source for riskymh.dev.">
          <ProjectLinks>
            <ProjectLink href="https://riskymh.dev" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
            <ProjectLink href="https://github.com/RiskyMH/Website" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
          </ProjectLinks>
        </ExperimentRow>
        <ExperimentRow name="bun-docs" description="An unofficial redesign of the Bun docs.">
          <ProjectLinks>
            <ProjectLink href="https://github.com/RiskyMH/bun-docs" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://bun-docs.vercel.app/docs" icon={<Brand icon={GlobeIcon} />}>Website</ProjectLink>
          </ProjectLinks>
        </ExperimentRow>
      </ExperimentList>
    </WorkSection>
  );
}

export function DeveloperTools() {
  return (
    <WorkSection labelledBy="developer-tools-title" className="tools-section">
      <SectionHeading id="developer-tools-title">Developer tools</SectionHeading>
      <ToolList>
        <ToolRow name="dbcat" description="A CLI to inspect PostgreSQL, MySQL, and SQLite tables.">
          <ProjectLinks>
            <ProjectLink href="https://github.com/RiskyMH/dbcat" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://npm.im/dbcat" icon={<Brand icon={NpmIcon} />}>npm</ProjectLink>
          </ProjectLinks>
        </ToolRow>
        <ToolRow name="aws-sdk" description="Typed utilities for AWS services and Cloudflare R2.">
          <ProjectLinks>
            <ProjectLink href="https://github.com/RiskyMH/aws-sdk" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://www.npmjs.com/package/@riskymh/aws" icon={<Brand icon={NpmIcon} />}>npm</ProjectLink>
          </ProjectLinks>
        </ToolRow>
        <ToolRow name="discord-api-spec-ts" description="Generated TypeScript types and schemas for Discord’s API.">
          <ProjectLinks>
            <ProjectLink href="https://github.com/RiskyMH/discord-api-spec-ts" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink>
            <ProjectLink href="https://www.npmjs.com/package/discord-api-spec" icon={<Brand icon={NpmIcon} />}>npm</ProjectLink>
          </ProjectLinks>
        </ToolRow>
        <ToolRow name="discord-libs-zoo" description="Equivalent Discord honeypot bots across libraries.">
          <ProjectLinks><ProjectLink href="https://github.com/RiskyMH/discord-libs-zoo" icon={<Brand icon={GithubIcon} />}>GitHub</ProjectLink></ProjectLinks>
        </ToolRow>
      </ToolList>
    </WorkSection>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer pb-4 pt-7" id="elsewhere">
      <div className="closing-card relative isolate flex min-h-[112px] items-center gap-[18px] overflow-hidden rounded-xl border border-line bg-[linear-gradient(110deg,#202020,#1d1d1d)] px-6 py-[18px] before:absolute before:-z-10 before:bottom-0 before:right-[-8%] before:h-full before:w-[48%] before:bg-[radial-gradient(ellipse_at_84%_55%,rgba(255,103,35,.12),transparent_66%)] after:absolute after:-z-10 after:bottom-[-47px] after:right-[-3%] after:h-[80px] after:w-[58%] after:rotate-[-4deg] after:rounded-[50%] after:border-b after:border-[rgba(255,103,35,.24)] after:content-[''] max-[600px]:min-h-[88px] max-[600px]:gap-[13px] max-[600px]:px-[15px] max-[600px]:py-[13px]">
        <FireIcon className="closing-flame size-[50px] shrink-0 object-contain max-[600px]:h-[46px] max-[600px]:w-[42px]" aria-hidden="true" />
        <div className="closing-copy min-w-0">
          <h2 className="mb-1 mt-0 text-[20px] font-[680] leading-[1.2] tracking-[-.03em] max-[600px]:text-[18px]">Thanks for visiting.</h2>
          <p className="m-0 text-[13px] text-secondary max-[600px]:text-[12px]">Just a random website on the internet.</p>
        </div>
        <a
          className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-secondary transition-colors hover:border-[rgba(255,103,35,.28)] hover:bg-accent-subtle hover:text-accent-hover"
          href="https://github.com/sponsors/RiskyMH"
          target="_blank"
          rel="noreferrer"
        >
          <HeartIcon className="size-4 text-accent" />
          Sponsor
        </a>
      </div>
      <div className="mb-3 mt-[27px] flex items-center gap-3 max-[600px]:mb-[9px] max-[600px]:mt-[21px]">
        <h2 className="m-0 text-[16px] font-[620] leading-[1.2] tracking-[-.02em]">Elsewhere</h2>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-2 gap-8 border-b border-line py-[13px] pb-[15px] max-[900px]:gap-6 max-[600px]:grid-cols-1 max-[600px]:gap-[13px]">
        <SocialGroup id="community-contact" title={"Community & contact"}>
          <FooterSocialLink href="https://github.com/RiskyMH" icon={<Brand icon={GithubIcon} />}>GitHub</FooterSocialLink>
          <FooterSocialLink href="https://discord.com/invite/EpRzgepKuF" icon={<Brand icon={DiscordIcon} />}>Discord</FooterSocialLink>
          <FooterSocialLink href="mailto:hello@riskymh.dev" icon={<Brand icon={MailIcon} />}>Email</FooterSocialLink>
          <FooterSocialLink href="https://x.com/RiskyMH5" icon={<Brand icon={TwitterIcon} />}>X / Twitter</FooterSocialLink>
          <FooterSocialLink href="https://www.npmjs.com/~riskymh" icon={<Brand icon={NpmIcon} />}>npm</FooterSocialLink>
        </SocialGroup>
        <SocialGroup id="other-profiles" title="Other profiles">
          <FooterSocialLink href="https://youtube.com/@RiskyMH" icon={<Brand icon={YoutubeIcon} />}>YouTube</FooterSocialLink>
          <FooterSocialLink href="https://reddit.com/user/RiskyMH" icon={<Brand icon={RedditIcon} />}>Reddit</FooterSocialLink>
          <FooterSocialLink href="https://bsky.app/profile/riskymh.dev" icon={<Brand icon={BlueskyIcon} />}>Bluesky</FooterSocialLink>
          <FooterSocialLink href="https://en.wikipedia.org/wiki/User:RiskyMH" icon={<Brand icon={WikipediaIcon} />}>Wikipedia</FooterSocialLink>
          <FooterSocialLink href="https://riskymh.dev" icon={<Brand icon={GlobeIcon} />}>This website</FooterSocialLink>
        </SocialGroup>
      </div>
      <div className="footer-bottom flex items-center gap-[14px] pt-[17px] text-[12px] text-muted max-[600px]:flex-wrap max-[600px]:gap-x-3 max-[600px]:gap-y-2">
        <a className="footer-wordmark inline-flex items-center gap-[9px] whitespace-nowrap text-[14px] font-[680] tracking-[-.025em] text-primary [&_svg]:size-[16px]" href="#top">
          <FireIcon aria-hidden="true" /><span>RiskyMH</span>
        </a>
        <span>© 2026 RiskyMH</span>
        <a className="back-to-top ml-auto inline-flex items-center gap-1 text-secondary hover:text-accent-hover" href="#top">
          Back to top <ArrowUpIcon className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
