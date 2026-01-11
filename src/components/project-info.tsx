import React from "react";
import ExternalIcon from "./icons/external-icon.svg";
import GlobeIcon from "./icons/globe-icon.svg";
import DiscordIcon from "./icons/discord-icon.svg";
import GitHubIcon from "./icons/github-icon.svg";
import LinkButton from "./link-button";
import TwitterIcon from "./icons/twitter-icon.svg";

const linkConfig = {
  website: {
    text: "Website",
    Icon: GlobeIcon,
  },
  discord: {
    text: "Discord",
    Icon: DiscordIcon,
  },
  "discord-bot-invite": {
    text: "Invite Bot",
    Icon: DiscordIcon,
  },
  github: {
    text: "GitHub",
    Icon: GitHubIcon,
  },
  twitter: {
    text: "Twitter",
    Icon: TwitterIcon,
  },
};

export default function ProjectInfo({ name, icon, Icon, links = [], description = '', iconCircle = false }: {
  name: string;
  icon?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  links: { url: string; type: keyof typeof linkConfig; disabled?: boolean; primary?: boolean }[];
  description?: string;
  iconCircle?: boolean;
}) {
  return (
    <div className="project-card flex h-dvh w-full snap-center items-center justify-center md:snap-align-none md:h-auto">
      <div className="flex flex-col items-center rounded-xl bg-card p-3 shadow-md md:flex-row md:p-4 gap-2 md:gap-4 max-w-md w-full relative">
        {Icon ? (
          <>
            <Icon className={`${iconCircle ? "rounded-full" : "rounded-xl"} w-24 h-24 bg-placeholder shrink-0`} />
            <img loading="lazy" className="hidden" src={icon} alt={`${name}'s icon`} />
          </>
        ) : (
          <img loading="lazy" className={`${iconCircle ? "rounded-full" : "rounded-xl"} w-24 h-24 bg-placeholder shrink-0`} src={icon} alt={`${name}'s icon`} />
        )}
        <div className="flex flex-col gap-2">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold leading-9">{name}</h3>
            <p className="text-text-secondary text-pretty">{description}</p>
          </div>
          <div className="flex flex-row justify-center md:justify-normal gap-2">
            {links
              .map((link, i) => {
                if (!linkConfig[link.type]) return null;
                const { text, Icon: BtnIcon } = linkConfig[link.type];
                return (
                  <LinkButton
                    key={link.url + i}
                    url={link.url}
                    text={link.disabled ? link.disabled.toString() : text}
                    Icon={BtnIcon}
                    newTab={!link.disabled}
                    disabled={link.disabled}
                    primary={link.primary}
                    small={true}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
