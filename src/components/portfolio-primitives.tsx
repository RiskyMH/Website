import { encodeObfuscated } from "./portfolio-shared";

export function ExternalLink({ href, icon, children, className = "", srOnly = false }: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  srOnly?: boolean;
}) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      className={className}
      href={isEmail ? "https://emailthing.me/@RiskyMH" : href}
      data-obfuscated={isEmail ? encodeObfuscated(href) : undefined}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noreferrer"}
    >
      {icon}
      <span className={srOnly ? "sr-only" : undefined}>{children}</span>
    </a>
  );
}

export function ProjectLink({ href, icon, children, className = "" }: { href: string; icon: React.ReactNode; children: React.ReactNode; className?: string }) {
  return <ExternalLink href={href} icon={icon} className={`project-link [&_.brand-image]:size-3 ${className}`}>{children}</ExternalLink>;
}

export function HeaderSocialLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <ExternalLink href={href} icon={icon} srOnly className="header-social relative grid size-8 place-items-center rounded-full text-primary transition-colors hover:bg-surface-hover hover:text-accent-hover [&_.brand-image]:size-4">{children}</ExternalLink>;
}

export function ProfileSocialLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <ExternalLink href={href} icon={icon} srOnly className="profile-social grid size-9 place-items-center rounded-full bg-[#2b2b2b] transition-colors hover:bg-[#373330] [&_.brand-image]:size-[18px] max-[600px]:size-8 max-[600px]:[&_.brand-image]:size-4">{children}</ExternalLink>;
}

export function FooterSocialLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <ExternalLink href={href} icon={icon} className="social-link inline-flex min-h-8 items-center gap-2 py-1 text-[12px] text-secondary transition-colors hover:text-accent-hover [&_.brand-image]:size-[13px] [&_.brand-image]:opacity-70 max-[600px]:min-h-7 max-[600px]:text-[12px]">{children}</ExternalLink>;
}

export function ProjectLinks({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`project-links flex flex-wrap items-center gap-1.5 ${className}`}>{children}</div>;
}

export const desktopNavClass = "text-[14px] text-muted transition-colors hover:text-accent-hover";
export const mobileNavClass = "block rounded-md px-[10px] py-[11px] text-[14px] text-secondary transition-colors hover:bg-surface-hover hover:text-primary";

export function NavLinks({ className }: { className: string }) {
  return (
    <>
      <a className={className} href="#work">Projects</a>
      <a className={className} href="#about">About</a>
      <a className={className} href="#elsewhere">Elsewhere</a>
    </>
  );
}

export function SectionHeading({ children, id }: { children: string; id: string }) {
  return (
    <div className="section-heading mb-[17px] flex items-center gap-[11px] before:h-[17px] before:w-1 before:shrink-0 before:rounded-[4px] before:bg-accent before:content-[''] max-[600px]:mb-[13px]">
      <h2 id={id} className="m-0 text-[22px] font-[690] leading-[1.25] tracking-[-.035em] max-[600px]:text-[20px]">{children}</h2>
      <span className="ml-[6px] h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}

export function WorkSection({ labelledBy, className = "", children }: {
  labelledBy: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`work-section mb-[var(--section-gap)] last:mb-0 ${className}`} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}

export function CardGrid({ kind, children }: { kind: "project" | "application"; children: React.ReactNode }) {
  return (
    <div className={`${kind}-grid grid grid-cols-3 gap-[11px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-[9px]`}>
      {children}
    </div>
  );
}

const compactPillClass = "[&_.project-link]:min-h-[24px] [&_.project-link]:px-[7px] [&_.project-link]:py-[3px] max-[600px]:[&_.project-link]:min-h-[24px]";

export function ExperimentList({ children }: { children: React.ReactNode }) {
  return (
    <ul className={`experiment-list m-0 grid grid-cols-2 border-y border-line p-0 max-[600px]:grid-cols-1 max-[600px]:[&_.project-links]:justify-end ${compactPillClass}`}>
      {children}
    </ul>
  );
}

export function ToolList({ children }: { children: React.ReactNode }) {
  return (
    <div className={`tools-list grid grid-cols-4 border-y border-line max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 ${compactPillClass}`}>
      {children}
    </div>
  );
}

const cardClass = "rounded-[11px] border border-line bg-raised";

export function ItemCard({ name, description, icon, href, archived = false, className = "", children }: {
  name: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  archived?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article className={`${cardClass} flex min-h-[132px] flex-col justify-between gap-3 p-[14px] max-[600px]:min-h-[108px] max-[600px]:p-3 ${className}`}>
      <div className="flex min-w-0 items-start gap-[11px]">
        {icon}
        <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
          <div className="flex w-full items-center gap-2">
            <h3 className="m-0 text-[15px] font-[650] tracking-[-.015em]">
              {href ? <a className="hover:text-accent-hover" href={href} target="_blank" rel="noreferrer">{name}</a> : name}
            </h3>
            {archived && (
              <span className="archived-badge ml-auto shrink-0 text-[9px] font-medium uppercase leading-[1.2] tracking-[.06em] text-muted">
                archived
              </span>
            )}
          </div>
          <p className="m-0 text-[13px] leading-[1.45] text-secondary">{description}</p>
        </div>
      </div>
      {children}
    </article>
  );
}

export function ExperimentRow({ name, description, children }: {
  name: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="experiment-row flex min-h-[63px] items-center justify-between gap-3 border-b border-white/[.045] px-3 py-[10px] odd:border-r odd:border-white/[.045] max-[600px]:odd:border-r-0">
      <div className="min-w-0">
        <h3 className="m-0 font-mono text-[13px] font-[560] leading-[1.35]">{name}</h3>
        {description && <p className="mb-0 mt-[3px] text-[12px] text-muted">{description}</p>}
      </div>
      {children}
    </li>
  );
}

export function ToolRow({ name, description, children }: {
  name: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="tool-row flex min-h-[96px] min-w-0 flex-col justify-center gap-2 border-r border-line p-[13px] last:border-r-0 max-[600px]:min-h-[88px] max-[600px]:border-b max-[600px]:border-r-0 max-[600px]:last:border-b-0">
      <h3 className="m-0 font-mono text-[13px] font-[600] leading-[1.35]">{name}</h3>
      <p className="m-0 text-[12px] leading-[1.45] text-secondary">{description}</p>
      {children}
    </article>
  );
}

export function SocialGroup({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="social-group min-w-0" aria-labelledby={`social-${id}`}>
      <h3 className="mb-[6px] mt-0 text-[12px] font-[600] text-secondary">{title}</h3>
      <nav className="flex flex-wrap items-center gap-x-[18px] gap-y-[3px] max-[600px]:gap-x-3 max-[600px]:gap-y-0.5" aria-label={title}>{children}</nav>
    </section>
  );
}
